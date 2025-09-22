import React from 'react';
import App from '@rnmf/mobile';
import {SafeAreaView, ScrollView, Text} from 'react-native';

export default function Main(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Host App</Text>
        <App />
      </ScrollView>
    </SafeAreaView>
  );
}
