"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function getAllArticles() {
  const articlesDirectory = path.join(process.cwd(), "public/content/articles");

  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
      date: data.date instanceof Date ? data.date.toISOString() : data.date,
    };
  });

  const sortedArticles = allArticlesData.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return sortedArticles;
};

export async function getFeaturedArticles() {
  const allArticlesData = await getAllArticles();

  const featuredArticles = allArticlesData.filter(article => article.featured === true);

  return featuredArticles;
};

export async function getArticle(slug) {
  const articlesDirectory = path.join(process.cwd(), "public/content/articles");

  const fileNames = fs.readdirSync(articlesDirectory);

  const foundFileName = fileNames.find(fileName => fileName.replace(/\.md$/, "") === slug);

  if (foundFileName == undefined) {
    notFound();
  }

  const fullPath = path.join(articlesDirectory, foundFileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data } = matter(fileContents);

  return {
    slug,
    ...data,
    date: data.date instanceof Date ? data.date.toISOString() : data.date,
  };
}

export async function login() {
}

export async function search(query) {
  const articlesDirectory = path.join(process.cwd(), "public/content/articles");

  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title
    };
  });

  const matchingArticles = allArticles.filter(article => article.title.includes(query));

  return matchingArticles;
}