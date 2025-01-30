"use server"

import { writeClient } from "@/sanity/lib/write-client";
import { createSlug, parseServerActionResponse } from "./utils";

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

    const result = await writeClient.create({ _type: "startup", ...startup })

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    })
  }
}