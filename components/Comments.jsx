"use client";

import Image from "next/image";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Comments({
    postId,
    initialComments = [],
}) {
    const [comments, setComments] = useState(initialComments);

    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.comment.trim()
        ) {
            setMessage("Please complete all fields.");
            return;
        }

        try {
            setStatus("sending");
            setMessage("");

            const response = await fetch("/api/comments", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    postId,
                    name: form.name,
                    email: form.email,
                    comment: form.comment,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Unable to submit comment."
                );
            }

            setForm({
                name: "",
                email: "",
                comment: "",
            });

            if (data.comment?.status === "approved") {
                setComments((current) => [
                    ...current,
                    data.comment,
                ]);

                setMessage(
                    "Your comment has been published."
                );
            } else {
                setMessage(
                    "Thank you. Your comment is awaiting moderation."
                );
            }

            setStatus("success");
        } catch (error) {
            setStatus("error");
            setMessage(error.message);
        }
    }

    return (
        <section
            aria-labelledby="comments-heading"
            className="mt-16 border-t border-neutral-200 pt-12"
        >
            <div className="mb-10 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-neutral-100">
                    <MessageCircle
                        size={20}
                        strokeWidth={1.8}
                    />
                </span>

                <div>
                    <h2
                        id="comments-heading"
                        className="text-2xl font-semibold tracking-tight text-neutral-950"
                    >
                        Comments
                    </h2>

                    <p className="mt-1 text-sm text-neutral-500">
                        {comments.length}{" "}
                        {comments.length === 1
                            ? "comment"
                            : "comments"}
                    </p>
                </div>
            </div>

            {comments.length > 0 ? (
                <div className="space-y-5">
                    {comments.map((comment) => (
                        <article
                            key={comment.id}
                            className="rounded-2xl border border-neutral-200 bg-white p-6"
                        >
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={
                                            comment.author_avatar_urls?.["96"] ||
                                            comment.author_avatar_urls?.["48"] ||
                                            "/assets/default-avatar.png"
                                        }
                                        alt={comment.author_name || "User avatar"}
                                        width={44}
                                        height={44}
                                        className="size-11 rounded-full object-cover"
                                    />

                                    <div>
                                        <h3
                                            className="font-semibold text-neutral-950"
                                            dangerouslySetInnerHTML={{
                                                __html: comment.author_name,
                                            }}
                                        />

                                        <time
                                            dateTime={comment.date}
                                            className="mt-1 block text-xs text-neutral-400"
                                        >
                                            {new Date(comment.date).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                }
                                            )}
                                        </time>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="text-sm leading-7 text-neutral-600"
                                dangerouslySetInnerHTML={{
                                    __html: comment.content?.rendered || "",
                                }}
                            />
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-neutral-200 px-6 py-10 text-center">
                    <p className="text-sm text-neutral-500">
                        No comments yet. Be the first to
                        share your thoughts.
                    </p>
                </div>
            )}

            <div className="mt-12 rounded-3xl bg-neutral-50 p-6 sm:p-8">
                <div className="mb-7">
                    <p className="text-sm font-medium text-neutral-500">
                        Join the discussion
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
                        Leave a Comment
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                        Your email address will not be
                        published.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="comment-name"
                                className="mb-2 block text-sm font-medium text-neutral-700"
                            >
                                Name
                            </label>

                            <input
                                id="comment-name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                                className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-neutral-950"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="comment-email"
                                className="mb-2 block text-sm font-medium text-neutral-700"
                            >
                                Email
                            </label>

                            <input
                                id="comment-email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-neutral-950"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="comment-message"
                            className="mb-2 block text-sm font-medium text-neutral-700"
                        >
                            Comment
                        </label>

                        <textarea
                            id="comment-message"
                            name="comment"
                            value={form.comment}
                            onChange={handleChange}
                            rows={6}
                            required
                            className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-neutral-950"
                        />
                    </div>

                    {message && (
                        <p
                            role="status"
                            className={`text-sm ${status === "error"
                                    ? "text-red-600"
                                    : "text-neutral-600"
                                }`}
                        >
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === "sending"
                            ? "Submitting..."
                            : "Post Comment"}
                    </button>
                </form>
            </div>
        </section>
    );
}