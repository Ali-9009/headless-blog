"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import BlogCard from "@/components/BlogCard";

export default function CategoryTabs({
    posts,
    categories,
}) {
    const [activeCategory, setActiveCategory] =
        useState("all");

    const filteredPosts = useMemo(() => {
        const result =
            activeCategory === "all"
                ? posts
                : posts.filter((post) =>
                    post.categories?.includes(
                        Number(activeCategory)
                    )
                );

        return result.slice(0, 6);
    }, [posts, activeCategory]);

    const activeName =
        activeCategory === "all"
            ? "Latest Articles"
            : categories.find(
                (category) =>
                    String(category.id) ===
                    String(activeCategory)
            )?.name || "Articles";

    return (
        <section
            aria-labelledby="explore-articles"
            className="border-t border-neutral-200"
        >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                <header className="mb-10">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Explore
                    </p>

                    <h2
                        id="explore-articles"
                        className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
                    >
                        Explore Articles
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                        Browse articles and writings by topic.
                    </p>
                </header>

                <nav
                    aria-label="Article categories"
                    className="mb-10 flex flex-wrap gap-2"
                >
                    <button
                        type="button"
                        onClick={() =>
                            setActiveCategory("all")
                        }
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeCategory === "all"
                                ? "border-neutral-950 bg-neutral-950 text-white"
                                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-950"
                            }`}
                    >
                        All
                    </button>

                    {categories.map((category) => {
                        const active =
                            String(activeCategory) ===
                            String(category.id);

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(
                                        category.id
                                    )
                                }
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active
                                        ? "border-neutral-950 bg-neutral-950 text-white"
                                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-950"
                                    }`}
                            >
                                {category.name}
                            </button>
                        );
                    })}
                </nav>

                <div className="mb-7 flex items-center justify-between gap-5">
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                        {activeName}
                    </h3>

                    <span className="text-sm text-neutral-500">
                        {filteredPosts.length} articles
                    </span>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{
                            opacity: 0,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {filteredPosts.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {filteredPosts.map(
                                    (post, index) => (
                                        <motion.div
                                            key={post.id}
                                            initial={{
                                                opacity: 0,
                                                y: 18,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay:
                                                    index *
                                                    0.05,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1,
                                                ],
                                            }}
                                        >
                                            <BlogCard
                                                post={post}
                                            />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-neutral-200 py-12 text-center">
                                <p className="text-sm text-neutral-500">
                                    No articles found in this
                                    category.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-10 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}