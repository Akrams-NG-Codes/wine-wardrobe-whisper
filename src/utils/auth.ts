import { supabase } from "@/lib/supabase";

interface UserMetadata {
  first_name: string;
  last_name: string;
  phone?: string;
}

export const registerUser = async (
  email: string,
  password: string,
  metadata: UserMetadata
) => {
  try {
    // Register user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: `${window.location.origin}/account`,
      },
    });

    if (authError) throw authError;

    if (authData.user) {
      // Create user profile in the database
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: authData.user.id,
            email: email,
            first_name: metadata.first_name,
            last_name: metadata.last_name,
            phone: metadata.phone,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

      if (profileError) throw profileError;
    }

    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Registration failed"),
    };
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Sign in error:", error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Sign in failed"),
    };
  }
};

export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Sign out error:", error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Sign out failed"),
    };
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { success: true, user };
  } catch (error) {
    console.error("Get current user error:", error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Failed to get current user"),
    };
  }
}; 