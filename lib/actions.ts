import { createSlug } from "./utils";

export const createStartup = async (form: FormData) => {
  // TODO: Add auth, if user is not signed in, return error

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form),
  );

  const slug = createSlug(title);

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
    };

    // TODO: Write startup to Sanity

    return startup;
  } catch (error) {
    console.log(error);
  }
}