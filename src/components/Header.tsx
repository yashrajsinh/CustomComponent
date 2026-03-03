import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, isVisible }: any) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        {isVisible ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imgIcon}
              source={{
                uri: 'https://files.softicons.com/download/system-icons/ikons-icons-by-studiotwentyeight/png/128/Back.png',
              }}
            />
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    height: 50,
    width: 50,
  },
});
