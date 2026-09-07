import Link from "next/link";
import { ArrowRight, BookOpen, Play } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import BlogCard from "@/components/BlogCard";
import {
    getCategories,
    getPosts,
} from "@/lib/wordpress";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import YoutubeVideoCard from "@/components/YoutubeVideoCard";
import {
    videos,
    shorts,
} from "@/data/videos";
import YoutubeShortCard from "@/components/YoutubeShortCard";
import CategoryTabs from "@/components/CategoryTabs";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://saeedahmedashrafi.com";

export const metadata = {
    title: "Saeed Ahmed Ashrafi",

    description:
        "Official website of Saeed Ahmed Ashrafi featuring Urdu articles, Islamic writings, educational content and meaningful reflections.",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        url: SITE_URL,
        title: "Saeed Ahmed Ashrafi",
        description:
            "Explore Urdu articles, Islamic writings, educational content and reflections by Saeed Ahmed Ashrafi.",
        siteName: "Saeed Ahmed Ashrafi",
    },
};

export default async function Home() {


    const [posts, categories] = await Promise.all([
        getPosts(),
        getCategories(),
    ]);

    const latestPosts = posts.slice(0, 6);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Saeed Ahmed Ashrafi",
        url: SITE_URL,

        sameAs: [
            "https://www.youtube.com/@saeedahmedashrafiofficial",
            "https://www.instagram.com/iamsaeedahmedashrafiofficial/",
            "https://www.facebook.com/iamsaeedahmedashrafi/",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Saeed Ahmed Ashrafi",
        publisher: {
            "@id": `${SITE_URL}/#person`,
        },
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema).replace(
                        /</g,
                        "\\u003c"
                    ),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema).replace(
                        /</g,
                        "\\u003c"
                    ),
                }}
            />

            <section className="relative overflow-hidden border-b border-neutral-200 bg-[#faf9f6]">
                <div className="mx-auto grid min-h-180 max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
                    <div>
                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600">
                            <BookOpen size={16} />
                            Articles · Knowledge · Reflections
                        </p>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-7xl">
                            Saeed Ahmed
                            <span className="block text-neutral-500">
                                Ashrafi
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                            Urdu writings, Islamic knowledge, educational
                            discussions and thoughtful reflections created
                            to inform, inspire and encourage meaningful
                            learning.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                            >
                                Explore Articles
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    <aside className="relative">
                        <div className="rounded-4xl border border-neutral-200 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                            <div className="relative min-h-125 overflow-hidden rounded-[1.6rem]">
                                <Image
                                    src="/assets/saeed-ahmed-ashrafi.webp"
                                    alt="Saeed Ahmed Ashrafi"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <div className="max-w-sm">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                                            Writer & Educator
                                        </p>

                                        <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                                            Knowledge becomes valuable when it benefits others.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <CategoryTabs
                posts={posts}
                categories={categories}
            />

            <section
                id="about"
                className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28"
            >
                <header>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        About
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950">
                        Writing with purpose
                    </h2>
                </header>

                <div className="max-w-3xl">
                    <p className="text-xl leading-9 font-medium text-neutral-800">
                        Allama Saeed Ahmed Ashrafi is a Pakistani Islamic religious scholar, speaker, and spiritual leader from Karachi.
                    </p>
                    <p className="mt-6 text-xl leading-9 text-neutral-700">
                        Saeed Ahmed Ashrafi shares articles and educational
                        content focused on Islamic knowledge, history,
                        reflection and subjects that encourage thoughtful
                        learning.
                    </p>

                    <p className="mt-6 text-base leading-8 text-neutral-600">
                        This website brings those writings together in one
                        place, making it easier for readers to discover,
                        understand and revisit meaningful topics.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
                        >
                            Browse all writings
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-12 lg:py-18">
                <header className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                            Latest
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
                            Recent Articles
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                            Explore the latest writings, educational topics
                            and reflections.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
                    >
                        View all articles
                        <ArrowRight size={16} />
                    </Link>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </section>

            <StatsCounter />

            <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <header className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                            Watch
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
                            Latest Videos
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                            Watch the latest lectures and educational discussions by
                            Saeed Ahmed Ashrafi.
                        </p>
                    </div>

                    <a
                        href="https://www.youtube.com/@saeedahmedashrafiofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-neutral-950"
                    >
                        View YouTube Channel
                    </a>
                </header>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <YoutubeVideoCard
                            key={video.id}
                            video={video}
                        />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                            Shorts
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                            YouTube Shorts
                        </h2>

                        <p className="mt-4 max-w-2xl text-neutral-600">
                            Watch short clips and quick reflections by Saeed Ahmed Ashrafi.
                        </p>
                    </div>

                    <a
                        href="https://www.youtube.com/@saeedahmedashrafiofficial/shorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden text-sm font-medium text-neutral-700 transition hover:text-neutral-950 sm:block"
                    >
                        View all Shorts
                    </a>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {shorts.map((short) => (
                        <YoutubeShortCard
                            key={short.id}
                            short={short}
                        />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24">
                <div className="overflow-hidden rounded-4xl bg-neutral-950 px-8 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                            Connect & Learn
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Follow Saeed Ahmed Ashrafi
                        </h2>

                        <p className="mt-4 leading-7 text-neutral-300">
                            Explore videos, educational discussions, reflections and
                            updates across YouTube and social platforms.
                        </p>
                    </div>

                    <nav
                        aria-label="Social media"
                        className="mt-8 flex flex-wrap gap-3 lg:mt-0"
                    >
                        <a
                            href="https://www.youtube.com/@saeedahmedashrafiofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
                        >
                            <FaYoutube size={20} />
                            YouTube
                        </a>

                        <a
                            href="https://www.instagram.com/iamsaeedahmedashrafiofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            <FaInstagram size={20} />
                            Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/iamsaeedahmedashrafi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            <FaFacebookF size={20} />
                            Facebook
                        </a>
                    </nav>
                </div>
            </section>
        </main>
    );
}