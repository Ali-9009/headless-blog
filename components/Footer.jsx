import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-3 md:items-center">
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="text-lg font-semibold tracking-tight text-neutral-950"
                        >
                            Saeed Ahmed Ashrafi
                        </Link>

                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                            Articles, knowledge, reflections and educational
                            content by Saeed Ahmed Ashrafi.
                        </p>
                    </div>

                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-neutral-600"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-neutral-950"
                        >
                            Home
                        </Link>

                        <Link
                            href="/blog"
                            className="transition hover:text-neutral-950"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact-us"
                            className="transition hover:text-neutral-950"
                        >
                            Contact
                        </Link>
                    </nav>

                    <nav
                        aria-label="Social media"
                        className="flex items-center justify-center gap-2 md:justify-end"
                    >
                        <a
                            href="https://www.youtube.com/@saeedahmedashrafiofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Saeed Ahmed Ashrafi on YouTube"
                            className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                        >
                            <FaYoutube size={20} />
                        </a>

                        <a
                            href="https://www.instagram.com/iamsaeedahmedashrafiofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Saeed Ahmed Ashrafi on Instagram"
                            className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="https://www.facebook.com/iamsaeedahmedashrafi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Saeed Ahmed Ashrafi on Facebook"
                            className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </nav>
                </div>

                <div className="mt-8 border-t border-neutral-200 pt-6">
                    <p className="text-sm text-center text-neutral-500">
                        © {new Date().getFullYear()} Saeed Ahmed Ashrafi. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}