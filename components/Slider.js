import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Slick from 'react-native-slick'
import tw from 'tailwind-react-native-classnames'

const Slider = () => {
  return (
    <Slick
      style={tw``}
      showsButtons={true}
      autoplay
      height={200}
      showsPagination={false}
      showsButtons={false}
    >
      <TouchableOpacity style={tw`mx-auto`} activeOpacity={1}>
        <Image
          source={require('../assets/images/banner-1.jpg')}
          style={{
            width: 360,
            height: 200,
            resizeMode: 'cover',
            overflow: 'hidden',
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={tw`mx-auto`} activeOpacity={1}>
        <Image
          source={require('../assets/images/banner-2.jpg')}
          style={{
            width: 360,
            height: 200,
            resizeMode: 'cover',
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>
    </Slick>
  )
}

export default Slider

const styles = StyleSheet.create({
  wrapper: {},
})
