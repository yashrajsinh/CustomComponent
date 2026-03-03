import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function Details({ route }: any) {
  const { movie } = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* == Movie Object Data == */}

        <View style={styles.card}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 5,
            }}
          >
            {movie.movieTitle}
          </Text>
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
      </SafeAreaView>
    </SafeAreaProvider>
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
