// src/lib/pagination.js
import { getSortedAndFilteredPosts, getTags } from "./blog-posts.js";
import { getSortedProjects } from "./projects.js";

// Exportamos el tamaño de página para que sea consistente en toda la app
export const POSTS_PER_PAGE = 6;
export const PAGE_SIZE = 12;

/**
 * Creates static paths for a paginated collection.
 * @param {Function} getItemsFunction - An async function that returns an array of items.
 * @returns {Promise<Array<{ params: { page: string | undefined } }>>}
 */
async function createStaticPaths(getItemsFunction, pageSize = PAGE_SIZE) {
    const allItems = await getItemsFunction();
    const totalPages = Math.max(Math.ceil(allItems.length / pageSize), 1);

    const paths = [{ params: { page: undefined } }];
    for (let n = 2; n <= totalPages; n++) {
        paths.push({ params: { page: String(n) } });
    }
    return paths;
}

export async function createStaticPathsForPosts(pageSize = PAGE_SIZE) {
    return createStaticPaths(getSortedAndFilteredPosts, pageSize);
}

export async function createStaticPathsForProjects(pageSize = PAGE_SIZE) {
    return createStaticPaths(getSortedProjects, pageSize);
}

export async function createStaticPathsForTags() {
    return createStaticPaths(getTags);
}
