import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

<<<<<<< Updated upstream
export const supabaseUrl = process.env.SUPABASE_URL || '';
export const supabaseAnonKey = process.env.SUPABASE_KEY || '';
=======
export const supabaseUrl = `${process.env.SUPABASE_URL}`;
export const supabaseKey = `${process.env.SUPABASE_KEY}`;
>>>>>>> Stashed changes


export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        storageKey: 'supabase.auth.token',
    },
});

// export const supabase = createClient(supabaseUrl, supabaseKey, {
//     auth: {
//         storage: AsyncStorage as any,
//         autoRefreshToken: true,
//         persistSession: true,
//         detectSessionInUrl: false,
//         storageKey: 'supabase.auth.token',
//     },
// });

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//     auth: {
//       storage: AsyncStorage as any,
//       autoRefreshToken: true,
//       persistSession: true,
//       detectSessionInUrl: false,
//     },
//   })