import {
    getAllPosts,
    getCategories,
} from "@/lib/wordpress";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://saeedahmedashrafi.com";

export default async function sitemap() {
    const [posts, categories] = await Promise.all([
        getAllPosts(),
        getCategories(),
    ]);

    const staticPages = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/author/saeed-ahmed-ashrafi`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const postPages = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.modified,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const categoryPages = categories.map((category) => ({
        url: `${SITE_URL}/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    return [
        ...staticPages,
        ...postPages,
        ...categoryPages,
    ];
}