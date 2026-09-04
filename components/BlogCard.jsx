import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
    const media =
        post._embedded?.["wp:featuredmedia"]?.[0];

    const image = media?.source_url;

    const imageAlt =
        media?.alt_text?.trim() ||
        post.title.rendered;

    return (
        <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {image && (
                <Link
                    href={`/blog/${post.slug}`}
                    className="block"
                >
                    <figure className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </figure>
                </Link>
            )}

            <div className="p-6">
                <time
                    dateTime={post.date}
                    className="mb-3 block text-sm text-neutral-500"
                >
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </time>

                <h2 className="text-xl font-semibold leading-snug text-neutral-950">
                    <Link
                        href={`/blog/${post.slug}`}
                        dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                        }}
                    />
                </h2>

                <div
                    className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600"
                    dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                    }}
                />

                <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-block text-sm font-medium text-neutral-950 underline-offset-4 hover:underline"
                >
                    Read article
                </Link>
            </div>
        </article>
    );
}