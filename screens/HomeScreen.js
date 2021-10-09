import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Slider from '../components/Slider'
import Category from '../components/Category'
import {
  useCollection,
  useCollectionOnce,
  useDocument,
  useDocumentOnce,
} from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import HomeCollection from '../components/HomeCollection'
import { useNavigation } from '@react-navigation/native'
import { useAuthState } from 'react-firebase-hooks/auth'
import { StatusBar } from 'expo-status-bar'
import { Button } from 'react-native-elements'
import AppLoading from 'expo-app-loading'
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
} from '@expo-google-fonts/poppins'
import TrustBox from '../components/TrustBox'

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
  })
  const [categoriesSnapshot] = useCollectionOnce(
    db.collection('categories').orderBy('timestamp', 'asc')
  )
  const navigation = useNavigation()
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        navigation.navigate('LandingScreen')
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  // Slider Results
  const [seventyFourlivresenuneseulevidéo] = useDocumentOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('lesanti-sèchesdufondateur')
      .collection('results')
      .doc('74livresenuneseulevidéo')
  )

  const [motivaction] = useDocumentOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('lesanti-sèchesdufondateur')
      .collection('results')
      .doc('motivaction')
  )

  const sliderResults = [
    seventyFourlivresenuneseulevidéo?.data(),
    motivaction?.data(),
  ]

  // Les plus gros succès sur Les CERVEAUX
  const [lesleçonsvidéosprivéesdufondateur] = useCollectionOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('lessecretsde375livres')
      .collection('results')
  )

  const lesplusgrossuccèssurlescerveaux =
    lesleçonsvidéosprivéesdufondateur?.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

  // Nouveautés - percersurtiktok => l'influencedesréseauxsociauxenmusculation => décryptagedel'approchedanslaruedufondateur
  const [percersurtiktok] = useDocumentOnce(
    db
      .collection('categories')
      .doc('communaute')
      .collection('categoryPageData')
      .doc("mesméthodespourdépasserlemilliond'abonnés")
      .collection('results')
      .doc('percersurtiktok')
  )

  const [linfluencedesréseauxsociauxenmusculation] = useDocumentOnce(
    db
      .collection('categories')
      .doc('musculation')
      .collection('categoryPageData')
      .doc('lesnon-ditsdelamusculation')
      .collection('results')
      .doc("l'influencedesréseauxsociauxenmusculation")
  )

  const [décryptagedelapprochedanslaruedufondateur] = useDocumentOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('nosmeilleursmomentsenlive')
      .collection('results')
      .doc("décryptagedel'approchedanslaruedufondateur")
  )

  const nouveautés = [
    percersurtiktok?.data(),
    linfluencedesréseauxsociauxenmusculation?.data(),
    décryptagedelapprochedanslaruedufondateur?.data(),
  ]

  // Les coups de coeur de 100LivresEn1Jour
  const [mes47trésorsdeguerre] = useCollectionOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('mes47trésorsdeguerre')
      .collection('results')
  )

  const mes47trésorsdeguerreDocs = mes47trésorsdeguerre?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  // Tendances actuelles - SITEWEB => VENTE
  const [commentlindustrieagroalimentairenousempoisonne] = useDocumentOnce(
    db
      .collection('categories')
      .doc('sante')
      .collection('categoryPageData')
      .doc('mescomplémentsalimentairespréférés')
      .collection('results')
      .doc('commentl’industrieagroalimentairenousempoisonne')
  )

  const [lesbasesdusommeil] = useDocumentOnce(
    db
      .collection('categories')
      .doc('sante')
      .collection('categoryPageData')
      .doc('àappliquerdèscettenuit')
      .collection('results')
      .doc('lesbasesdusommeil')
  )

  const [les5mythesducopywriting] = useDocumentOnce(
    db
      .collection('categories')
      .doc('vente')
      .collection('categoryPageData')
      .doc("lesindispensablesd'untextequiconvertit")
      .collection('results')
      .doc('les5mythesducopywriting')
  )

  const [vidéo0avecnadir] = useDocumentOnce(
    db
      .collection('categories')
      .doc('communaute')
      .collection('categoryPageData')
      .doc("j'étudievosprofilsdeaàz")
      .collection('results')
      .doc('vidéo0avecnadir')
  )

  const tendancesactuelles = [
    commentlindustrieagroalimentairenousempoisonne?.data(),
    lesbasesdusommeil?.data(),
    les5mythesducopywriting?.data(),
    vidéo0avecnadir?.data(),
  ]

  // Notre sélection pour vous
  const [comprendrelesbesoinsfémininpourmieuxséduire] = useDocumentOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('réussirsespremièresapproches')
      .collection('results')
      .doc('comprendrelesbesoinsfémininpourmieuxséduire')
  )

  const [orian] = useDocumentOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('cequepensentlescerveauxdenadirmessaï')
      .collection('results')
      .doc('orian')
  )

  const [louisaxel] = useDocumentOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('cequepensentlescerveauxdenadirmessaï')
      .collection('results')
      .doc('louis-axel')
  )

  const notresélectionpourvous = [
    comprendrelesbesoinsfémininpourmieuxséduire?.data(),
    orian?.data(),
    louisaxel?.data(),
  ]

  // Top 10 sur l'application aujourd'hui
  const [lessecretsde375livres] = useCollectionOnce(
    db
      .collection('categories')
      .doc('livres')
      .collection('categoryPageData')
      .doc('lessecretsde375livres')
      .collection('results')
  )

  const lessecretsde375livresDocs = lessecretsde375livres?.docs.map((doc) => ({
    ...doc.data(),
  }))

  // À rattraper maintenant
  const [réussirsespremièresapproches] = useCollectionOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('réussirsespremièresapproches')
      .collection('results')
  )

  const réussirsespremièresapprochesDocs =
    réussirsespremièresapproches?.docs.map((doc) => ({
      ...doc.data(),
    }))

  const [lesdécryptagesdeconversationsparsms] = useCollectionOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('lesdécryptagesdeconversationsparsms')
      .collection('results')
  )

  const lesdécryptagesdeconversationsparsmsDocs =
    lesdécryptagesdeconversationsparsms?.docs.map((doc) => ({
      ...doc.data(),
    }))

  const [nosmeilleursmomentsenlive] = useCollectionOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('nosmeilleursmomentsenlive')
      .collection('results')
  )

  const nosmeilleursmomentsenliveDocs = nosmeilleursmomentsenlive?.docs.map(
    (doc) => ({
      ...doc.data(),
    })
  )

  const [mesconférencespourdevenirunalpha] = useCollectionOnce(
    db
      .collection('categories')
      .doc('seduction')
      .collection('categoryPageData')
      .doc('mesconférencespourdevenirunalpha')
      .collection('results')
  )

  const mesconférencespourdevenirunalphaDocs =
    mesconférencespourdevenirunalpha?.docs.map((doc) => ({
      ...doc.data(),
    }))

  // if (loading) return <Text>Loading...</Text>;

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ backgroundColor: '#040714', flex: 1 }}>
        <StatusBar style="light" />

        <ScrollView style={tw`absolute h-full w-full`}>
          <Image
            // source={require('../assets/images/logo.png')}
            source={{
              uri: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/disneyplus_lob_log_forcd.png',
            }}
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Slider />
          <View style={tw`flex-row flex-wrap justify-center my-3`}>
            {categoriesSnapshot?.docs.map((doc) => {
              const id = doc.id
              const { title, img } = doc.data()
              return <Category key={id} id={id} title={title} img={img} />
            })}
          </View>

          {!loading && (
            <View style={tw`px-5 mb-3`}>
              <HomeCollection
                title="Les Plus Gros Succès sur Les CERVEAUX"
                results={lesplusgrossuccèssurlescerveaux}
              />

              <HomeCollection title="Nouveautés" results={nouveautés} />

              <HomeCollection
                title="Les Coups De Coeur de 100LivresEn1Jour"
                results={mes47trésorsdeguerreDocs}
              />

              <HomeCollection
                title="Tendances Actuelles"
                results={tendancesactuelles}
              />

              <HomeCollection
                title="Notre Sélection pour Vous"
                results={notresélectionpourvous}
              />

              <HomeCollection
                title="Top 10 sur l'Application Aujourd'hui"
                results={lessecretsde375livresDocs}
              />

              <HomeCollection
                title="À Rattraper Maintenant"
                results={réussirsespremièresapprochesDocs}
              />
              <HomeCollection
                results={sliderResults}
                title="La Boîte À Outils de La Communauté"
              />
            </View>
          )}
          <TrustBox />
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({})
