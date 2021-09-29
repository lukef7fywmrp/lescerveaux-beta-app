import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Slider from "../components/Slider";
import Category from "../components/Category";
import {
  useCollection,
  useCollectionOnce,
  useDocument,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import HomeCollection from "../components/HomeCollection";
import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-elements";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const [categoriesSnapshot] = useCollectionOnce(
    db.collection("categories").orderBy("timestamp", "asc")
  );
  const navigation = useNavigation();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        navigation.navigate("LandingScreen");
      }
    });

    return unsubscribe;
  }, []);

  // Les plus gros succès sur Les CERVEAUX - LIVRES => lesleçonsvidéosprivéesdufondateur
  const [lesleçonsvidéosprivéesdufondateur] = useCollectionOnce(
    db
      .collection("categories")
      .doc("livres")
      .collection("categoryPageData")
      .doc("lesleçonsvidéosprivéesdufondateur")
      .collection("results")
  );

  const lesplusgrossuccèssurlescerveaux =
    lesleçonsvidéosprivéesdufondateur?.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  // Nouveautés - LIVRES => 71livresenunevidéo
  const [seventyOnelivresenunevidéo] = useDocumentOnce(
    db
      .collection("categories")
      .doc("livres")
      .collection("categoryPageData")
      .doc("71livresenunevidéo")
      .collection("results")
      .doc("74livresenuneseulevidéo")
  );

  const nouveautés = [seventyOnelivresenunevidéo?.data()];

  // Les coups de coeur de 100LivresEn1Jour - MONTAGE => GRAPHISME => COMMUNAUTE
  const [lesprestationsrécentesdAntoine] = useDocumentOnce(
    db
      .collection("categories")
      .doc("montage")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesd'Antoine")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const [lesprestationsrécentesdemarin] = useDocumentOnce(
    db
      .collection("categories")
      .doc("montage")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdemarin")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const lescoupsdecoeurde100livresen1jour = [
    lesprestationsrécentesdAntoine?.data(),
    lesprestationsrécentesdemarin?.data(),
  ];

  // Tendances actuelles - SITEWEB => VENTE
  const [lesprestationsrécentesdemickaël] = useDocumentOnce(
    db
      .collection("categories")
      .doc("siteweb")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdemickaël")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const [suivipersonnaliséaveclefondateur] = useDocumentOnce(
    db
      .collection("categories")
      .doc("vente")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdeyounèsettony")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const [suivipersonnaliséaveclefondateur2] = useDocumentOnce(
    db
      .collection("categories")
      .doc("vente")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdeyounèsettony")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur2")
  );

  const tendancesactuelles = [
    lesprestationsrécentesdemickaël?.data(),
    suivipersonnaliséaveclefondateur?.data(),
    suivipersonnaliséaveclefondateur2?.data(),
  ];

  // Notre sélection pour vous - CONQUETES => COIFFURE
  const [lesprestationsrécentesdegeoffrey] = useDocumentOnce(
    db
      .collection("categories")
      .doc("conquetes")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdegeoffrey")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const [lesprestationsrécentesdeslimane] = useDocumentOnce(
    db
      .collection("categories")
      .doc("coiffure")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdeslimane")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const notresélectionpourvous = [
    lesprestationsrécentesdegeoffrey?.data(),
    lesprestationsrécentesdeslimane?.data(),
  ];

  // Top 10 sur l'application aujourd'hui - NUTRITION
  const [lesprestationsrécentesdemorganaldo] = useCollectionOnce(
    db
      .collection("categories")
      .doc("nutrition")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdemorganaldo")
      .collection("results")
  );

  const lesprestationsrécentesdemorganaldoDocs =
    lesprestationsrécentesdemorganaldo?.docs.map((doc) => ({
      ...doc.data(),
    }));

  const [lesprestationsrécentesdebenoît] = useCollectionOnce(
    db
      .collection("categories")
      .doc("nutrition")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesdebenoît")
      .collection("results")
  );

  const lesprestationsrécentesdebenoîtDocs =
    lesprestationsrécentesdebenoît?.docs.map((doc) => ({
      ...doc.data(),
    }));

  const top10surlapplicationaujourdhui = [
    lesprestationsrécentesdemorganaldoDocs,
    lesprestationsrécentesdebenoîtDocs,
  ];

  // À rattraper maintenant - MUSCULATION
  const [lesprestationsrécentesdangel] = useDocumentOnce(
    db
      .collection("categories")
      .doc("musculation")
      .collection("categoryPageData")
      .doc("lesprestationsrécentesd'angel")
      .collection("results")
      .doc("suivipersonnaliséaveclefondateur")
  );

  const arattrapermaintenant = [lesprestationsrécentesdangel?.data()];

  // La boîte à outils de la communauté - LIVRES
  const [lesguidespratiquesdenadir] = useCollectionOnce(
    db
      .collection("categories")
      .doc("livres")
      .collection("categoryPageData")
      .doc("lesguidespratiquesdenadir")
      .collection("results")
  );

  const lesguidespratiquesdenadirDocs = lesguidespratiquesdenadir?.docs.map(
    (doc) => ({
      id: doc.id,
      ...doc.data(),
    })
  );

  // Les trésors de guerre
  const [lesTresorsDeGuerre] = useCollectionOnce(
    db
      .collection("categories")
      .doc("livres")
      .collection("categoryPageData")
      .doc("lestrésorsdeguerre")
      .collection("results")
  );

  const lesTresorsDeGuerreDocs = lesTresorsDeGuerre?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // if (loading) return <Text>Loading...</Text>;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: "#040714", flex: 1 }}>
        <StatusBar style="light" />

        <ScrollView style={tw`absolute h-full w-full`}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{
              width: 130,
              height: 100,
              resizeMode: "contain",
              alignSelf: "center",
              marginLeft: 25,
            }}
          />
          <Slider />
          <View style={tw`flex-row flex-wrap justify-center mt-4`}>
            {categoriesSnapshot?.docs.map((doc) => {
              const id = doc.id;
              const { title, img } = doc.data();
              return <Category key={id} id={id} title={title} img={img} />;
            })}
          </View>

          <View style={tw`px-6`}>
            {/* <HomeCollection
            title="Les plus gros succès sur Les CERVEAUX"
            results={lesplusgrossuccèssurlescerveaux}
          /> */}

            {/* <HomeCollection title="Nouveautés" results={nouveautés} /> */}

            {/* <HomeCollection
            title="Les coups de coeur de 100LivresEn1Jour"
            results={lescoupsdecoeurde100livresen1jour}
          />

          <HomeCollection
            title="Tendances actuelles"
            results={tendancesactuelles}
          />

          <HomeCollection
            title="Notre sélection pour vous"
            results={notresélectionpourvous}
          /> */}

            {/* <HomeCollection
            title="Top 10 sur l'application aujourd'hui"
            results={top10surlapplicationaujourdhui}
          /> */}

            {/* <HomeCollection
            title="À rattraper maintenant"
            results={arattrapermaintenant}
          /> */}

            {/* <HomeCollection
            title="La boîte à outils de la communauté"
            results={lesguidespratiquesdenadirDocs}
          /> */}

            {/* <HomeCollection
            title="Les trésors de guerre"
            results={lesTresorsDeGuerreDocs}
          /> */}
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({});
