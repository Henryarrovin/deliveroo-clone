import { Image, Text, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { View } from 'react-native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

 const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
        <View style={tw`flex-row pb-3 items-center mx-4 mr-2 px-4`}>
            <Image 
                source={require('../assets/deliveroo_icon.png')}
                style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full mr-2`}
            />

            <View style={tw`flex-1`}>
                <Text style={tw`font-bold text-gray-400 text-xs`}>
                    Deliver Now!
                </Text>
                <Text style={tw`font-bold text-xl`}>
                    Currrent Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
        </View>

        <View style={tw`flex-row items-center mr-2 pb-2 mx-4 px-4`}>
            <View style={tw`flex-row flex-1 mr-2 bg-gray-200 p-3`}>
                <MagnifyingGlassIcon size={20} color={"gray"} style={tw`mr-2`}/>
                <TextInput 
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                />
            </View>
            
            <AdjustmentsVerticalIcon size={35} color={"#00CCBB"}/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen;