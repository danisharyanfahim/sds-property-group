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
  *[_type == '${itemType.toLowerCase()}'] | order(_createdAt desc)  {
  name, type,
  images, amenities, overview,
  rooms, size, price, 
  city, state, area,
  'avgRent': averageRent,
  'datePosted': _createdAt,
  'currentSlug': slug.current,
  'id': _id
}`;
  const itemData = await sanityFetch({
    query: query,
    revalidate: 30,
  });
  return itemData;
};

export const getLatestItems = async (
  itemType: string,
  numberOfItems: number
) => {
  const query = `
  *[_type == '${itemType.toLowerCase()}'][0...${numberOfItems}] | order(_createdAt desc)  {
  name, type,
  images, amenities, overview,
  rooms, size, price, 
  city, state, area,
  'avgRent': averageRent,
  'datePosted': _createdAt,
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
  name, type,
  images, amenities, overview,
  rooms, size, price, 
  city, state, area,
  'avgRent': averageRent,
  'datePosted': _createdAt,
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
