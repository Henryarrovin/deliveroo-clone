import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')} title={"Testing"}/>
      <CategoryCard imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')} title={"Testing"}/>
      <CategoryCard imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')} title={"Testing"}/>
      <CategoryCard imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')} title={"Testing"}/>
      <CategoryCard imageUrl={require('../assets/fde953e5aa504e8c83a84691582b0399.jpg')} title={"Testing"}/>
    </ScrollView>
  )
}

export default Categories;