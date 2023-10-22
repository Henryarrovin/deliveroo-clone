import { Image, ScrollView, Text, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import { sanityClient } from '../sanity';

 const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }
        `).then((data) => {
            setFeaturedCategories(data);
        }).catch((error) => {
            console.log('Error: ', error);
        });
    }, []);

    console.log(featuredCategories);

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

        <ScrollView style={tw`bg-gray-100 `}
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            <Categories />

            {featuredCategories?.map(category => {
                return (
                    <FeaturedRow
                        key={category._id}
                        id={category._id} 
                        title={category.name}
                        description={category.short_description}
                    />
                );
            })}

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;