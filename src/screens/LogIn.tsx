import React, { FC } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

import Logo from '@assets/images/logo.svg';

export const LogIn: FC = () => (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.logoContainer}>
        <Logo width={48} height={48} />
        <Text style={styles.logoText}>CMK</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: '#3F8CFF',
  },
});
