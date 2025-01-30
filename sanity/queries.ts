import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  description,
}`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
    _id, 
    title, 
    slug,
    _createdAt,
    views,
    description,
    category,
    image,
  }
`);
