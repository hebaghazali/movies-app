import React from 'react';
import { Stack, Text, Image, AspectRatio, Box, Heading } from 'native-base';
import { styles } from '../styles';
import { useEffect } from 'react';

export default function MovieDetails({ navigation, route }) {
  const { title, overview, release_date, poster_path, vote_average } =
    route.params;

  // useEffect(() => {
  //   console.log(title);
  // }, [title]);

  return (
    <Box alignItems='center' justifyContent='center' style={styles.container}>
      <Box
        maxW='80%'
        rounded='xl'
        overflow='hidden'
        borderColor='coolGray.200'
        shadow='5'
        justifyContent='space-between'
        alignItems='center'
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <AspectRatio w='100%'>
          {poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
              }}
              alt='Image'
            />
          ) : (
            <Image
              source={{
                uri: 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png',
              }}
              alt='Not Found Image'
            />
          )}
        </AspectRatio>
        <Stack p='5' space='2'>
          <Heading size='sm' ml='-1' style={{ maxHeight: 40 }}>
            {title}
          </Heading>
          <Text style={{ fontStyle: 'italic' }}>{overview}</Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Release Date:</Text>{' '}
            {release_date}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Rating:</Text> {vote_average}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
