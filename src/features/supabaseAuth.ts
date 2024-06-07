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
