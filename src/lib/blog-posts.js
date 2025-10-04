// src/lib/blog-posts.js
import { getCollection } from "astro:content";
import { slugify } from "../utils/slugify.js";

export async function getSortedAndFilteredPosts() {
    const now = new Date();
    const allPosts = await getCollection("blog", ({ data }) => {
        return !data.draft && data.pub_date <= now;
    });

    allPosts.sort((a, b) => b.data.pub_date.getTime() - a.data.pub_date.getTime());

    return allPosts;
}

export async function getPostsAmount() {
    const allPosts = await getSortedAndFilteredPosts();
    return allPosts.length;
}

export async function filterByTag(tag) {
  const allPosts = await getSortedAndFilteredPosts();
  return allPosts.filter(post => post.data.tags.some(postTag => slugify(postTag) === tag));
}

export async function getTags() {
  const posts = await getSortedAndFilteredPosts();
  const allTags = posts.flatMap(post => post.data.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map(tag => slugify(tag)); // Se añade .map para slugificar
}