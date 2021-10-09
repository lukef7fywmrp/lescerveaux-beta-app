import React, { useRef, useState } from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { Image, SafeAreaView } from 'react-native'
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { db } from '../firebase'
import { Button } from 'react-native-elements'
import {
  PlayIcon,
  PlusIcon,
  ChevronLeftIcon,
  ThumbUpIcon,
  PencilAltIcon,
} from 'react-native-heroicons/solid'
import {
  ThumbUpIcon as ThumbUpIconOutline,
  ClockIcon as ClockIconOutline,
  ShareIcon as ShareIconOutline,
  PencilAltIcon as PencilAltIconOutline,
  DotsHorizontalIcon,
} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Thumbnail from '../components/Thumbnail'
import data from '../data.json'
import { StatusBar } from 'expo-status-bar'
import { Video, AVPlaybackStatus } from 'expo-av'
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

const ResultScreen = ({ route }) => {
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
  const navigation = useNavigation()
  const [value, setValue] = useState(1)
  const [showPlayer, setShowPlayer] = useState(false)
  const [loadingAnimation, setLoadingAnimation] = useState(false)
  const video = useRef(null)

  const [resultSnapshot] = useDocument(
    db
      .collection('categories')
      .doc(route.params.categoryTitle)
      .collection('categoryPageData')
      .doc(route.params.categoryId)
      .collection('results')
      .doc(route.params.resultId)
  )

  const [resultsSnapshot] = useCollection(
    db
      .collection('categories')
      .doc(route.params.categoryTitle)
      .collection('categoryPageData')
      .doc(route.params.categoryId)
      .collection('results')
  )

  const [realtimeVideos] = useCollection(
    db
      .collection('categories')
      .doc(route.params.categoryTitle)
      .collection('categoryPageData')
      .doc(route.params.categoryId)
      .collection('results')
      .doc(route.params.resultId)
      .collection('videos')
  )

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView
        style={{ backgroundColor: '#040714', flex: 1, position: 'relative' }}
      >
        <StatusBar style="light" hidden />
        <View style={tw`absolute w-full h-52 z-50`}>
          {realtimeVideos?.docs.map((doc) => {
            const videoId = doc.id
            const { videoTitle, videoSrc } = doc.data()

            return (
              <Video
                key={videoId}
                ref={video}
                style={tw`w-full h-full`}
                useNativeControls
                resizeMode="cover"
                isLooping
                source={{
                  uri: videoSrc,
                }}
              />
            )
          })}
        </View>

        <Button
          icon={<ChevronLeftIcon color="white" size={24} />}
          containerStyle={[tw`absolute z-50 top-4 left-4`]}
          buttonStyle={tw`bg-black bg-opacity-40 rounded-full w-7 h-7`}
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={[tw`p-2.5`, { paddingTop: 200 }]}>
            <Text
              style={[
                tw`text-white font-bold text-lg capitalize`,
                { fontFamily: 'Poppins_700Bold' },
              ]}
            >
              {resultSnapshot?.data().resultTitle}
            </Text>
            <View style={tw`flex-row items-center px-4 py-2`}>
              <Button
                icon={<ThumbUpIconOutline color="white" size={22} />}
                containerStyle={[tw``]}
                buttonStyle={tw`bg-transparent p-0 flex-col mr-8`}
                titleStyle={[
                  tw`text-sm`,
                  { fontFamily: 'Poppins_600SemiBold' },
                ]}
                title="24"
              />

              <Button
                icon={<ClockIconOutline color="white" size={22} />}
                containerStyle={[tw``]}
                buttonStyle={tw`bg-transparent p-0 flex-col mr-8`}
                titleStyle={[
                  tw`text-sm`,
                  { fontFamily: 'Poppins_600SemiBold' },
                ]}
                title="Watchlist"
              />

              <Button
                icon={<ShareIconOutline color="white" size={22} />}
                containerStyle={[tw``]}
                buttonStyle={tw`bg-transparent p-0 flex-col mr-8`}
                titleStyle={[
                  tw`text-sm`,
                  { fontFamily: 'Poppins_600SemiBold' },
                ]}
                title="Share"
              />

              <Button
                icon={<PencilAltIconOutline color="white" size={22} />}
                containerStyle={[tw``]}
                buttonStyle={tw`bg-transparent p-0 flex-col mr-8`}
                titleStyle={[
                  tw`text-sm`,
                  { fontFamily: 'Poppins_600SemiBold' },
                ]}
                title="Notes"
              />

              <Button
                icon={<DotsHorizontalIcon color="white" size={22} />}
                containerStyle={[tw``]}
                buttonStyle={tw`bg-transparent p-0 flex-col mr-8`}
                titleStyle={[
                  tw`text-sm`,
                  { fontFamily: 'Poppins_600SemiBold' },
                ]}
                title="More"
              />
            </View>
            <View style={tw`border-t border-white border-opacity-40`} />

            <View style={tw`p-2`}>
              <Text
                style={[tw`text-white`, { fontFamily: 'Poppins_600SemiBold' }]}
              >
                Comments
              </Text>
            </View>
          </View>

          <View style={tw`px-1 py-2 relative`}>
            {value === 1 && (
              <>
                {resultsSnapshot?.docs
                  .filter((doc) => doc.id !== route.params.resultId)
                  .map((filteredDoc) => {
                    const {
                      resultId,
                      resultDescription,
                      resultTitle,
                      thumbnailImg,
                      categoryId,
                      categoryTitle,
                    } = filteredDoc.data()
                    return (
                      <Thumbnail
                        key={resultId}
                        resultId={resultId}
                        categoryId={categoryId}
                        thumbnailImg={thumbnailImg}
                        resultTitle={resultTitle}
                        categoryTitle={categoryTitle}
                        resultPage
                      />
                    )
                  })}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default ResultScreen

const styles = StyleSheet.create({})
