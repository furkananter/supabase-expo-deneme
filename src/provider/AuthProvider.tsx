import { View, Text } from 'react-native';
import React, { useState, useEffect, createContext } from 'react';
import { Session } from '@supabase/supabase-js';

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

const AuthProvider = () => {
  return (
    <View>
      <Text>AuthProvider</Text>
    </View>
  );
};

export default AuthProvider;
