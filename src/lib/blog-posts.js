// src/lib/blog-posts.js
import { getCollection } from "astro:content"

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