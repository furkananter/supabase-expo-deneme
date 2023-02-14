import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env.SUPABASE_URL || '';
export const supabaseAnonKey = process.env.SUPABASE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        storageKey: 'supabase.auth.token',
    },
});