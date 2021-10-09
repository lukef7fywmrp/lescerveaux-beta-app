import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const Category = ({ img, title, id }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[tw`m-1.5 border border-white rounded-md`]}
      onPress={() => navigation.navigate('CategoryScreen', { id })}
    >
      <Image
        source={{ uri: img }}
        style={{
          width: 100,
          height: 55,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
      />
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({})
