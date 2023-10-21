import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"}/>
      </View>

      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >

        <RestaurantCard 
            id={123}
            imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')}
            title={"Sushi"}
            rating={5}
            genre={"Japanese"}
            address={"Japan"}
            short_description={"description"}
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')}
            title={"Sushi"}
            rating={5}
            genre={"Japanese"}
            address={"Japan"}
            short_description={"description"}
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')}
            title={"Sushi"}
            rating={5}
            genre={"Japanese"}
            address={"Japan"}
            short_description={"description"}
            dishes={[]}
            long={20}
            lat={0}
        />
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow;