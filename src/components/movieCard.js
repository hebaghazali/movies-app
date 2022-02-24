import React from 'react';

import { styles } from '../styles';

import {
  Image,
  Text,
  AspectRatio,
  Stack,
  Heading,
  Box,
  Button,
} from 'native-base';

const MovieCard = ({ item, navigation }) => {
  return (
    <Box alignItems='center'>
      <Box
        maxW='65%'
        height='300'
        rounded='xl'
        overflow='hidden'
        borderColor='coolGray.200'
        _light={{
          backgroundColor: 'gray.50',
        }}
        marginY='3'
        shadow='3'
        justifyContent='space-between'
      >
        <AspectRatio w='100%'>
          {item.poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
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
        <Stack p='4' space={2}>
          <Heading size='sm' ml='-1' style={{ maxHeight: 40 }}>
            {item.title}
          </Heading>
          <Text fontWeight='400'>
            Release Date: <Text fontWeight='700'>{item.release_date}</Text>
          </Text>
          <Button
            style={{ backgroundColor: '#6c3f8a' }}
            onPress={() => navigation.navigate('MovieDetails', item)}
          >
            More Details
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default MovieCard;
