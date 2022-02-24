import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMovies from '../store/actions/movies';
import { styles } from '../styles';
import { FlatList, View } from 'native-base';
import MovieCard from '../components/movieCard';

export default function Movies({ navigation }) {
  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(moviesList);
  // }, [moviesList]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={moviesList}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
        }}
        renderItem={({ item }) => (
          <MovieCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
