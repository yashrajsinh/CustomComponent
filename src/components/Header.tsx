import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
useState;

export default function Header({ title, isVisible }: any) {
  const [pageTitle, setTitle] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        {isVisible ? (
          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={{
                uri: 'https://files.softicons.com/download/system-icons/ikons-icons-by-studiotwentyeight/png/128/Back.png',
              }}
            />
          </TouchableOpacity>
        ) : null}
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  imgIcon: {
    height: 50,
    width: 50,
  },
});
