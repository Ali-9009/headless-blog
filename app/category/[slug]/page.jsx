import { notFound } from "next/navigation";

import BlogCard from "@/components/BlogCard";

import {
    getCategoryBySlug,
    getPostsByCategory,
} from "@/lib/wordpress";
import Link from "next/link";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://saeedahmedashrafi.com";

function stripHtml(html = "") {
    return html
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const category = await getCategoryBySlug(slug);

    if (!category) {
        return {};
    }

    const description =
        stripHtml(category.description) ||
        `Explore articles from the ${category.name} category by Saeed Ahmed Ashrafi.`;

    const url = `${SITE_URL}/category/${category.slug}`;

    return {
        title: category.name,

        description,

        alternates: {
            canonical: `/category/${category.slug}`,
        },

        openGraph: {
            type: "website",
            title: `${category.name} | Saeed Ahmed Ashrafi`,
            description,
            url,
            siteName: "Saeed Ahmed Ashrafi",
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;

    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const posts = await getPostsByCategory(category.id);

    const description = stripHtml(category.description);

    return (
        <main>
            <section className="border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-6 text-sm text-neutral-500"
                    >
                        <Link href="/">Home</Link>

                        <span className="mx-2">
                            /
                        </span>

                        <Link href="/blog">
                            Back to Blog
                        </Link>

                        <span className="mx-2">
                            /
                        </span>

                        <span>{category.name}</span>
                    </nav>

                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                        Category
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                        {category.name}
                    </h1>

                    {description && (
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
                            {description}
                        </p>
                    )}
                </div>
            </section>

            <section
                aria-labelledby="category-articles"
                className="mx-auto max-w-7xl px-6 py-16 lg:py-20"
            >
                <h2
                    id="category-articles"
                    className="sr-only"
                >
                    Articles in {category.name}
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}