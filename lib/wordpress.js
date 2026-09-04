const WORDPRESS_URL = process.env.WORDPRESS_URL;

async function wordpressFetch(endpoint) {
    const response = await fetch(
        `${WORDPRESS_URL}/wp-json/wp/v2${endpoint}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            `WordPress request failed: ${response.status}`
        );
    }

    return response.json();
}

export function getPosts() {
    return wordpressFetch(
        "/posts?_embed&per_page=12"
    );
}

export async function getPostBySlug(slug) {
    const posts = await wordpressFetch(
        `/posts?slug=${encodeURIComponent(slug)}&_embed`
    );

    return posts[0] || null;
}

export function getCategories() {
    return wordpressFetch(
        "/categories?per_page=100&hide_empty=true"
    );
}

export async function getCategoryBySlug(slug) {
    const categories = await wordpressFetch(
        `/categories?slug=${encodeURIComponent(slug)}`
    );

    return categories[0] || null;
}

export function getPostsByCategory(categoryId) {
    return wordpressFetch(
        `/posts?_embed&categories=${categoryId}&per_page=12`
    );
}

export function getTags() {
    return wordpressFetch(
        "/tags?per_page=100&hide_empty=true"
    );
}

export async function getTagBySlug(slug) {
    const tags = await wordpressFetch(
        `/tags?slug=${encodeURIComponent(slug)}`
    );

    return tags[0] || null;
}

export function getPostsByTag(tagId) {
    return wordpressFetch(
        `/posts?_embed&tags=${tagId}&per_page=12`
    );
}

export function getAllPosts() {
    return wordpressFetch(
        "/posts?per_page=100&_fields=slug,modified"
    );
}

export function getComments(postId) {
    return wordpressFetch(
        `/comments?post=${postId}&status=approve&orderby=date&order=asc&per_page=100`
    );
}