import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import { images } from "../../constants"
import FormField from '../../components/FormField';
import  CustomButton from '../../components/FormField';

const SignIn = () => {
  const [ form, setForm ] = useState({ 
    email: '',
    password: ''
   });
  
   const [ isSubmitting, setIsSubmitting ] = useState(false);

   const submit = () => {

   }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-content h-full px-4 my-6">
           <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
           <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

           <FormField 
             title="Email"
             value={form.email}
             handleChangeText={(e) => setForm({...form, email: e})}
             otherStyles="mt-7"
             keyboardType="email-address"
           />

            <FormField 
             title="Password"
             value={form.password}
             handleChangeText={(e) => setForm({...form, password: e})}
             otherStyles="mt-7"
           />

           <CustomButton title="Sign In"
            handlePres={submit}
            containerStyles='mt-7' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn