import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Layout } from 'react-native-rapi-ui';

const Loading = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Layout>
  );
};

export default Loading;
