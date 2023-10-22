import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import tw from 'twrnc';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {
        params: {
            id,
            imageUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        },
    } = useRoute();

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imageUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }))
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <>
    <BasketIcon />
    <ScrollView>
        <View style={tw`relative`}>
            <Image 
                source={{
                    uri: urlFor(imageUrl).url(),
                }}
                style={tw`w-full h-56 bg-gray-300 p-4`}
            />
            <TouchableOpacity 
                onPress={navigation.goBack}
                style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
            >
                <ArrowLeftIcon size={20} color={"#00CCBB"}/>
            </TouchableOpacity>
        </View>

        <View style={tw`bg-white`}>
            <View style={tw`px-4 pt-4`}>
                <Text style={tw`text-3xl font-bold`}>
                    {title}
                </Text>
                <View style={tw`flex-row mx-2 my-1`}>
                    <View style={tw`flex-row items-center space-x-2`}>
                        <StarIcon color={'green'} opacity={0.5} size={22}/>
                        <Text style={tw`text-xs text-gray-500`}>
                            <Text style={tw`text-green-500`}>{rating}</Text> . {genre}
                        </Text>
                    </View>

                    <View style={tw`flex-row items-center space-x-2`}>
                        <MapPinIcon color={'gray'} opacity={0.4} size={22}/>
                        <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
                    </View>
                </View>

                <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
            </View>

            <TouchableOpacity style={tw`flex-row items-center mx-2 p-4 border-y border-gray-300`}>
                <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20}/>
                <Text style={tw`pl-2 flex-1 text-md font-bold`}>
                    Have a food allergy?
                </Text>
            </TouchableOpacity>

            <View style={tw`pb-36`}>
                <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>
                    Menu
                </Text>

                {dishes.map((dish) => {
                    // const imageUrl = urlFor(dish.image.asset._ref).url();
                    {console.log("This is the image:", dish.image);}
                    {console.log("This is the imageUrl:", imageUrl);}
                    {console.log("This is the description:", dish.short_description);}
                    return(
                        <DishRow 
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    )
                })}
            </View>
        </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen;