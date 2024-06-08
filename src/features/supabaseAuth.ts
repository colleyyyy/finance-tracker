import supabase from "../database/supabase.ts";

interface SignUpResponse {
  email?: string;
  password?: string;
  userName?: string;
  error?: string;
}
export async function signUpUser(
  email: string,
  password: string,
  userName: string
): Promise<SignUpResponse> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: userName,
          last_name: " ",
        },
      },
    });

    if (error) {
      throw error;
    }
    return { email: data.user.email, userName: userName };
  } catch (error) {
    return { error: error.message };
  }
}

export interface SupabaseAuthResponse {
  data: Data;
  error: null | string;
}

export interface Data {
  user: User;
}
export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  last_sign_in_at: string;
  app_metadata?: AppMetadata;
  user_metadata?: UserMetadata;
  identities?: Identity[];
  created_at: string;
  updated_at: string;
}
export async function signInUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return { data: null, error: error.message };
    }
    return { data };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

// google sign in

export async function signInUserWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: import.meta.env.VITE_SUPABASE_GOOGLE,

    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "http://localhost:5173/",
    },
  });
  if (error) {
    return { error: error };
  }
  return { data };
}
