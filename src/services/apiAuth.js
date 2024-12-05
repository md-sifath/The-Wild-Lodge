import supabase from "./supabase";

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logoutUser() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function createUser({ email, fullName, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function UpdateCurrentUser({ fullName, password }) {
  let UpdateData;

  if (password) UpdateData = { password };
  if (fullName) UpdateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(UpdateData);
  console.log(UpdateData);
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
