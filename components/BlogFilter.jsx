"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BlogCard from "@/components/BlogCard";

export default function BlogFilter({
    posts,
    categories,
}) {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "all") {
            return posts;
        }

        return posts.filter((post) =>
            post.categories?.some(
                (categoryId) =>
                    String(categoryId) === String(activeCategory)
            )
        );
    }, [posts, activeCategory]);

    return (
        <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
            <motion.nav
                aria-label="Blog categories"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-12 border-y border-neutral-200 py-5"
            >
                <div className="flex flex-wrap items-center gap-2">
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
                        All Articles
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
                                    setActiveCategory(category.id)
                                }
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active
                                        ? "border-neutral-950 bg-neutral-950 text-white"
                                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-950"
                                    }`}
                            >
                                {category.name}

                                <span
                                    className={`ml-2 ${active
                                            ? "text-white/60"
                                            : "text-neutral-400"
                                        }`}
                                >
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </motion.nav>

            <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-10"
            >
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
                    {activeCategory === "all"
                        ? "Latest Articles"
                        : categories.find(
                            (category) =>
                                String(category.id) ===
                                String(activeCategory)
                        )?.name || "Articles"}
                </h2>
            </motion.header>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{
                        opacity: 0,
                        y: 18,
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
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{
                                        opacity: 0,
                                        y: 24,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.06,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-neutral-600">
                            No articles found in this category.
                        </p>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}