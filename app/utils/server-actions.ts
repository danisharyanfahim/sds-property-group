"use server";

import { sanityFetch } from "../lib/client";

export const getAllItems = async (
  //   page: number,
  itemType: string
  //   itemsPerPage: number
) => {
  //   const firstItem = (page - 1) * itemsPerPage;
  //   const lastItem = page * itemsPerPage;
  //   const query = `
  //   *[_type == '${itemType.toLowerCase()}'][${firstItem}...${lastItem}] | order(_createdAt desc) {
  //   name,
  //   'dateCreated': _createdAt,
  //   'currentSlug': slug.current,
  //   'id': _id
  // }`;
  const query = `
  *[_type == '${itemType.toLowerCase()}'] | order(_createdAt desc) {
  name,
  'dateCreated': _createdAt,
  'currentSlug': slug.current,
  'id': _id
}`;
  const itemData = await sanityFetch({
    query: query,
    revalidate: 30,
  });
  return itemData;
};

export const getItem = async (itemType: string, slug: string) => {
  const query = `
*[_type == '${itemType.toLowerCase()}' && slug.current == "${slug}"] {
    name,
  'dateCreated': _createdAt,
  'currentSlug': slug.current,
  'id': _id
}[0]
    `;
  const articleData = await sanityFetch({
    query: query,
    revalidate: 30,
  });
  return articleData;
};
