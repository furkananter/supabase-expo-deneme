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

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Register'>) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function register() {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#17171E',
            }}
          >
            {/* <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require('../../../assets/images/register.png')}
            /> */}
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: '#17171E',
            }}
          >
            <Text
              style={{
                alignSelf: 'center',
                padding: 30,
              }}
            >
              Register
            </Text>
            <Text>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              onPress={() => {
                register();
              }}
              style={{
                marginTop: 20,
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Register'}
            </Button>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
              }}
            >
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Login here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme('light') : setTheme('dark');
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {isDarkmode ? '☀️ light theme' : '🌑 dark theme'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
