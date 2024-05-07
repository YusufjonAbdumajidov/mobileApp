import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { images } from "../../constants"

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-content h-full px-4 my-6">
           <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
           <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn