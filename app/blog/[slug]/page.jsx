import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
    getComments,
    getPostBySlug,
} from "@/lib/wordpress";

import Comments from "@/components/Comments";

import {
    getPostCategories,
    getPostTags,
} from "@/lib/post";

import Breadcrumbs from "@/components/Breadcrumbs";

import {
    createBreadcrumbSchema,
} from "@/lib/schema";

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

    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = stripHtml(post.title.rendered);

    const description =
        stripHtml(post.excerpt.rendered).slice(0, 160) ||
        `Read ${title} by Saeed Ahmed Ashrafi.`;

    const media =
        post._embedded?.["wp:featuredmedia"]?.[0];

    const image = media?.source_url;

    const imageAlt =
        media?.alt_text?.trim() || title;

    const url = `${SITE_URL}/blog/${post.slug}`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            type: "article",
            title,
            description,
            url,
            siteName: "Saeed Ahmed Ashrafi",
            publishedTime: post.date,
            modifiedTime: post.modified,
            authors: ["Saeed Ahmed Ashrafi"],

            images: image
                ? [
                    {
                        url: image,
                        alt: imageAlt,
                    },
                ]
                : [],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : [],
        },

        robots: {
            index: true,
            follow: true,

            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const comments = await getComments(post.id);
    
    const categories = getPostCategories(post);
    const tags = getPostTags(post);

    const title = stripHtml(post.title.rendered);

    const media =
        post._embedded?.["wp:featuredmedia"]?.[0];

    const image = media?.source_url;

    const imageAlt =
        media?.alt_text?.trim() || title;

    const description =
        stripHtml(post.excerpt.rendered).slice(0, 160) ||
        `Read ${title} by Saeed Ahmed Ashrafi.`;

    const articleUrl =
        `${SITE_URL}/blog/${post.slug}`;

    const primaryCategory = categories[0];

    const breadcrumbItems = [
        {
            label: "Home",
            href: "/",
            url: SITE_URL,
        },
        {
            label: "Blog",
            href: "/blog",
            url: `${SITE_URL}/blog`,
        },

        ...(primaryCategory
            ? [
                {
                    label: primaryCategory.name,
                    href: `/category/${primaryCategory.slug}`,
                    url: `${SITE_URL}/category/${primaryCategory.slug}`,
                },
            ]
            : []),

        {
            label: title,
            url: articleUrl,
        },
    ];

    const breadcrumbSchema =
        createBreadcrumbSchema(breadcrumbItems);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",

        headline: title,
        description,

        datePublished: post.date,
        dateModified: post.modified,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
        },

        author: {
            "@type": "Person",
           "@id": `${SITE_URL}/#person`,
            name: "Saeed Ahmed Ashrafi",
            url: SITE_URL,
        },

        publisher: {
            "@type": "Person",
           "@id": `${SITE_URL}/#person`,
            name: "Saeed Ahmed Ashrafi",
            url: SITE_URL,
        },

        ...(image && {
            image: [image],
        }),
    };

    return (
        <main>
            <article className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleSchema).replace(
                            /</g,
                            "\\u003c"
                        ),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            breadcrumbSchema
                        ).replace(/</g, "\\u003c"),
                    }}
                />

                <Breadcrumbs items={breadcrumbItems} />

                <header className="mb-10">
                    {categories.length > 0 && (
                        <nav
                            aria-label="Article categories"
                            className="mb-5 flex flex-wrap gap-2"
                        >
                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.slug}`}
                                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </nav>
                    )}

                    <h1
                        className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl"
                        dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                        }}
                    />

                    <time
                        dateTime={post.date}
                        className="mt-5 block text-sm text-neutral-500"
                    >
                        {new Date(post.date).toLocaleDateString(
                            "en-US",
                            {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }
                        )}
                    </time>
                </header>

                {image && (
                    <figure className="relative mb-12 aspect-video overflow-hidden rounded-3xl">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 896px"
                            className="object-cover"
                        />
                    </figure>
                )}

                <div
                    className="wordpress-content"
                    dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                    }}
                />

                {tags.length > 0 && (
                    <footer className="mt-12 border-t border-neutral-200 pt-8">
                        <p className="mb-4 text-sm font-medium text-neutral-500">
                            Topics
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </footer>
                )}

                <Comments
                    postId={post.id}
                    initialComments={comments}
                />
            </article>
        </main>
    );
}