import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { auth, db } from "../firebase";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const [subscriptionsSnapshot] = useCollection(
    db.collection("customers").doc(user?.uid).collection("subscriptions")
  );

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      console.log(snap.data());

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the firebase console.
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(
          "pk_test_51JN28RCBQH7aHMWD4xbnDaoxTsfKWeGrv8ky2ridSvZiLMrWNVjtN81z6FupttkQwafy4lOyvyFvYRcyzZ4jD6OG00qn4lwRGG"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={[tw`px-2.5`]}>
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 200,
            height: 120,
            resizeMode: "contain",
            alignSelf: "center",
            marginLeft: 40,
          }}
        />
        <Text
          style={tw`text-white font-semibold text-2xl text-center tracking-wide`}
        >
          Subscribe and start learning today
        </Text>

        <Text style={[tw`text-xs text-center mt-2 text-gray-400`]}>
          Cancel at any time.
        </Text>
      </View>

      <Text style={tw`text-gray-300 text-xs px-3 pt-8`}>
        By tapping the monthly subscription button below, you will be redirected
        to stripe's secure checkout page where you will need to enter your
        respective payment information. Note that, you will be able to cancel at
        any time, effective at the end of the billing period.
      </Text>

      <View style={tw`mt-4`}>
        {Object.entries(products).map(([productId, productData]) => {
          // add some logic to check if the user's subscription is active...
          //   const isCurrentPackage = productData?.name.includes(
          //     subscription?.role
          //   );

          return (
            <Button
              key={productId}
              title="€19.00 / month"
              onPress={() => loadCheckout(productData?.prices?.priceId)}
              buttonStyle={tw`bg-blue-600 rounded`}
              containerStyle={tw`rounded px-2`}
              titleStyle={tw`text-sm tracking-widest py-0.5`}
            />
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Plans;

const styles = StyleSheet.create({});
