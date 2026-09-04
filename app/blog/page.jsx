import BlogFilter from "@/components/BlogFilter";

import {
    getCategories,
    getPosts,
} from "@/lib/wordpress";

export const metadata = {
    title: "Blog",

    description:
        "Read articles, writings and reflections by Saeed Ahmed Ashrafi.",

    alternates: {
        canonical: "/blog",
    },

    openGraph: {
        title: "Blog | Saeed Ahmed Ashrafi",
        description:
            "Read articles, writings and reflections by Saeed Ahmed Ashrafi.",
        url: "/blog",
        type: "website",
    },
};

export default async function BlogPage() {
    const [posts, categories] = await Promise.all([
        getPosts(),
        getCategories(),
    ]);

    return (
        <main>
            <section className="border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Articles
                    </p>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                        Blog
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                        Explore the latest articles, writings and reflections
                        by Saeed Ahmed Ashrafi.
                    </p>
                </div>
            </section>

            <BlogFilter
                posts={posts}
                categories={categories}
            />
        </main>
    );
}