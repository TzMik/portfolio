// src/lib/pagination.js
import { getSortedAndFilteredPosts } from "./blog-posts.js";

export const PAGE_SIZE = 12;

export async function createStaticPathsForCollection() {
  const allItems = await getSortedAndFilteredPosts();
  const totalPages = Math.max(Math.ceil(allItems.length / PAGE_SIZE), 1);
  
  const paths = [{ params: { page: undefined } }];
  for (let n = 2; n <= totalPages; n++) {
    paths.push({ params: { page: String(n) } });
  }
  return paths;
}
