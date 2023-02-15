import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
} from 'react-native';
// import { Button } from '@rne/themed';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Register = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // async function register() {
  //   setLoading(true);
  //   const { user, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });
  //   if (!error && !user) {
  //     setLoading(false);
  //     alert('Check your email for the login link!');
  //   }
  //   if (error) {
  //     setLoading(false);
  //     alert(error.message);
  //   }
  // }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register</Text>
      <Button
        title="ForgetPassword"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
    </View>
  );
};

export default Register;
