import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins Data can not Loadded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabin can not delete");
  }

  return data;
}

export async function insertCabin(value) {
  //  1: Create cabin

  const imageName = `${Math.random()}-${value.image.name}`.replaceAll("/", "");
  console.log(imageName);

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-tmages/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...value, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("cabin can not insert");
  }

  // Upload the image if create cabin is succesfull

  const { error: imageError } = await supabase.storage
    .from("cabin-tmages")
    .upload(imageName, value.image);

  if (imageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(imageError.message);
    throw new Error("Image clould not be uploaded & cabin is deleted");
  }

  return data;
}
