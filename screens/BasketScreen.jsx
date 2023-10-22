import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'twrnc';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation  = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xs`}>
            <View>
                <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
                <Text style={tw`text-center text-gray-400`}>
                {restaurant && restaurant.title ? restaurant.title : 'Restaurant Title Not Found'}
                </Text>
            </View>

            <TouchableOpacity
                onPress={navigation.goBack}
                style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
            >
                <XCircleIcon 
                    color={"#00CCBB"}
                    height={50}
                    width={50}
                />
            </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5 gap-4`}>
            <Image 
                source={require('../assets/deliveroo_icon.png')}
                style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
            />
            <Text style={tw`flex-1`}>
                Deliver in 50-75 min
            </Text>
            <TouchableOpacity>
                <Text style={tw`text-[#00CCBB]`}>Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={tw`divide-y divide-gray-200`}>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View key={key} style={tw`flex-row items-center gap-x-3 bg-white py-2 px-5`}>
                    <Text style={tw`text-[#00CCBB]`}>{items.length} x</Text>
                    <Image 
                        source={{
                            uri: urlFor(items[0]?.image).url()
                        }}
                        style={tw`h-12 w-12 rounded-full`}
                    />
                    <Text style={tw`flex-1`}>{items[0]?.name}</Text>

                    <Text style={tw`text-gray-600`}>₹ {items[0]?.price}</Text>

                    <TouchableOpacity
                    >
                        <Text
                            style={tw`text-[#00CCBB] text-x5`}
                            onPress={() => dispatch(removeFromBasket({ id: key }))}
                        >
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}

        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 gap-y-4`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-400`}>Subtotal</Text>
                <Text style={tw`text-gray-400`}>₹ {basketTotal}</Text>
            </View>

            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-400`}>Delivery Fee</Text>
                <Text style={tw`text-gray-400`}>₹ 100</Text>
            </View>

            <View style={tw`flex-row justify-between`}>
                <Text>Order Total</Text>
                <Text style={tw`font-extrabold`}>₹ {basketTotal + 100}</Text>
            </View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('PreparingOrderScreen')}
                style={tw`rounded-lg bg-[#00CCBB] p-4`}
            >
               <Text style={tw`text-center text-white text-lg font-bold`}>Place Order</Text> 
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen;