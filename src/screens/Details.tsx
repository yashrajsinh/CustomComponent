import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/Header';

function Details({ route }: any) {
  const { movie } = route.params;

  return (
    <>
      <Header title={movie.movieTitle} isVisible={true} />
      <View style={styles.card}>
        <Image style={styles.imgStyle} source={{ uri: movie.imgURL }} />
        <Text
          style={{
            fontSize: 18,
            margin: 5,
          }}
        >
          {movie.movieDescription}
        </Text>
      </View>
    </>
  );
}

export default Details;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4F4',
    borderRadius: 10,
    padding: 10,
    margin: 15,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,

    // Android shadow
    elevation: 8,
  },

  //Image
  imgStyle: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
    padding: 10,
  },
});
