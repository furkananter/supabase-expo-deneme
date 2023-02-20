import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList, MainStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input } from '@rneui/themed';
import MyBottomSheet from '../../components/MyBottomSheet';
import BottomSheetComponent from '../../components/MyBottomSheet';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {

    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});

const Login = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<Boolean>(false);

  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setLoading(false);
      Alert.alert(error.message);
    } else {
      console.log('success:', data.user, data.session);
    }
  }

  async function register() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !data) {
      setLoading(false);
      console.log(data);
      Alert.alert('Check your email for the login link!');
    } else {
      console.log(data);
    }
    if (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }
  // async function signUpWithEmail() {
  //   setLoading(true);
  //   const { error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });

  //   if (error) Alert.alert(error.message);
  //   setLoading(false);
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'black' }}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      {/* <View style={styles.verticallySpaced}>
        <Button title="Sign up" disabled={loading} onPress={() => register()} />
      </View> */}
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Text style={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => navigation.navigate('Register')}
          >
            Sign up
          </Text>
        </Text>
      </View>
      {/* <View style={[styles.verticallySpaced, styles.mt20]}>
        <BottomSheetComponent />
      </View> */}
    </SafeAreaView>
  );
};

export default Login;
