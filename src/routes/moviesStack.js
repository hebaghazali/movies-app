import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Movies from './../screens/movies';
import MovieDetails from './../screens/movieDetails';

const Stack = createNativeStackNavigator();

export default function MoviesStack() {
  return (
    <Stack.Navigator
      initialRouteName='MoviesList'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#190424',
        },
        headerTitleStyle: {
          color: '#f1f0f1',
        },
      }}
    >
      <Stack.Screen
        name='MoviesList'
        component={Movies}
        options={{ title: 'Movies List' }}
      />
      <Stack.Screen
        name='MovieDetails'
        component={MovieDetails}
        options={{
          title: 'Movie Details',
          headerTintColor: '#f1f0f1',
        }}
      />
    </Stack.Navigator>
  );
}
