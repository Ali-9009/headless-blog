import { NextResponse } from "next/server";

const WORDPRESS_URL =
    process.env.WORDPRESS_URL;

export async function POST(request) {
    try {
        const body = await request.json();

        const postId = Number(body.postId);
        const name = body.name?.trim();
        const email = body.email?.trim();
        const comment = body.comment?.trim();

        if (
            !postId ||
            !name ||
            !email ||
            !comment
        ) {
            return NextResponse.json(
                {
                    message:
                        "Please complete all required fields.",
                },
                {
                    status: 400,
                }
            );
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return NextResponse.json(
                {
                    message:
                        "Please enter a valid email address.",
                },
                {
                    status: 400,
                }
            );
        }

        const response = await fetch(
            `${WORDPRESS_URL}/wp-json/wp/v2/comments`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    post: postId,
                    author_name: name,
                    author_email: email,
                    content: comment,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                {
                    message:
                        data?.message ||
                        "WordPress rejected the comment.",
                },
                {
                    status: response.status,
                }
            );
        }

        return NextResponse.json({
            success: true,
            comment: {
                id: data.id,
                author_name: data.author_name,
                author_avatar_urls: data.author_avatar_urls,
                date: data.date,
                content: data.content,
                status: data.status,
            },
        });
    } catch {
        return NextResponse.json(
            {
                message:
                    "Something went wrong while submitting your comment.",
            },
            {
                status: 500,
            }
        );
    }
}