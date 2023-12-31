import { View, Text, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import CategoryCard from './CategoryCard';
import { sanityClient, urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then(data => {
      setCategories(data)
    }).catch(error => {
      console.log("Error: ", error);
    })
  }, [])

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        return(
          <CategoryCard 
            key={category._id}
            imageUrl={urlFor(category.image).width(200).url()}
            title={category.name}
          />
        )
      })}
    </ScrollView>
  )
}

export default Categories;