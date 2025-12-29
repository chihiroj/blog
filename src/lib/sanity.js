"use server";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { groq, toPlainText } from "next-sanity";

const builder = createImageUrlBuilder(client);

function urlFor(imageSource) {
  return builder.image(imageSource).url();
}

export async function getAllArticles() {
  const ALL_ARTICLES_QUERY = `*[
  _type == "article"
]|order(publishedAt desc){_id, title,  "slug": slug.current, image, "author": author->name, date, description, "categories": categories[]->category }`;

  const articles = await client.fetch(ALL_ARTICLES_QUERY, {});

  return articles.map(article => ({
    ...article,
    image: article.image ? urlFor(article.image) : null,
    description: article.description ? toPlainText(article.description) : ""
  }));
};

export async function getFeaturedArticles() {
  const FEATURED_ARTICLES_QUERY = `*[
  _type == "article" && featured == true
]|order(publishedAt desc){_id, title,  "slug": slug.current, image, "author": author->name, date, description, "categories": categories[]->category }`;

  const articles = await client.fetch(FEATURED_ARTICLES_QUERY, {});

  return articles.map(article => ({
    ...article,
    image: article.image ? urlFor(article.image) : null,
    description: article.description ? toPlainText(article.description) : ""
  }));
};

export async function getArticle(slug) {
  const ARTICLE_QUERY = groq`*[
    _type == "article" && slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    image,
    "author": author->name,
    date,
    description,
    "categories": categories[]->category
  }`;

  const article = await client.fetch(ARTICLE_QUERY, { slug });

  if (!article) return undefined;

  return {
    ...article,
    image: article.image ? urlFor(article.image) : null,
    description: article.description ? toPlainText(article.description) : ""
  };
}

export async function login() {
  return [

  ];
};

export async function search(query) {
  const SEARCH_QUERY = groq`*[
    _type == "article" && title match $pattern
  ]{
    title,
    "slug": slug.current,
  }`;

  const pattern = `*${query}*`;

  const articles = await client.fetch(SEARCH_QUERY, { pattern });

  return articles;
}
