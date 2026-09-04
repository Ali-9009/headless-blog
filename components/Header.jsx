"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Menu,
    Phone,
    X,
} from "lucide-react";

import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideTopBar(window.scrollY > 80);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 h-20">
                {/* Top bar */}
                <div
                    className={`absolute left-0 top-0 h-10 w-full bg-neutral-950 text-white will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${hideTopBar
                            ? "-translate-y-full"
                            : "translate-y-0"
                        }`}
                >
                    <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                        <div className="flex items-center gap-2 text-white/70">
                            <Phone
                                size={14}
                                strokeWidth={1.8}
                            />

                            <a
                                href="tel:+923009073824"
                                className="text-xs font-medium tracking-wide transition-colors hover:text-white"
                            >
                                +92 300 9073824
                            </a>
                        </div>

                        <nav
                            aria-label="Social media"
                            className="flex items-center gap-1"
                        >
                            <a
                                href="https://www.youtube.com/@saeedahmedashrafiofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on YouTube"
                                className="flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/iamsaeedahmedashrafiofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on Instagram"
                                className="flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/iamsaeedahmedashrafi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on Facebook"
                                className="flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <FaFacebookF size={18} />
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Main header */}
                <div
                    className={`absolute left-0 top-0 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${hideTopBar
                            ? "translate-y-0"
                            : "translate-y-10"
                        }`}
                >
                    <nav
                        aria-label="Main navigation"
                        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
                    >
                        <Link
                            href="/"
                            className="text-xl font-semibold tracking-tight text-neutral-950"
                        >
                            Saeed Ahmed Ashrafi
                        </Link>

                        <div className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/blog"
                            className="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 md:inline-flex"
                        >
                            Read Articles
                        </Link>

                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(true)}
                            className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:bg-neutral-100 md:hidden"
                        >
                            <Menu size={20} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Overlay */}
            <div
                aria-hidden="true"
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${mobileOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
            />

            {/* Mobile sidebar */}
            <aside
                aria-label="Mobile menu"
                className={`fixed right-0 top-0 z-70 flex h-dvh w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${mobileOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
                <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-semibold tracking-tight text-neutral-950"
                    >
                        Saeed Ahmed Ashrafi
                    </Link>

                    <button
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={() => setMobileOpen(false)}
                        className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:bg-neutral-100"
                    >
                        <X size={20} />
                    </button>
                </header>

                <nav
                    aria-label="Mobile navigation"
                    className="flex flex-1 flex-col px-6 py-6"
                >
                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() =>
                                    setMobileOpen(false)
                                }
                                className="block rounded-xl px-4 py-3 text-base font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-6">
                        <Link
                            href="/blog"
                            onClick={() =>
                                setMobileOpen(false)
                            }
                            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                        >
                            Read Articles
                        </Link>
                    </div>

                    <div className="mt-auto border-t border-neutral-200 pt-6">
                        <a
                            href="tel:+923009073824"
                            className="flex items-center gap-3 text-sm font-medium text-neutral-600"
                        >
                            <span className="flex size-9 items-center justify-center rounded-full bg-neutral-100">
                                <Phone size={16} />
                            </span>

                            +92 300 9073824
                        </a>

                        <nav
                            aria-label="Mobile social media"
                            className="mt-5 flex items-center gap-2"
                        >
                            <a
                                href="https://www.youtube.com/@saeedahmedashrafiofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on YouTube"
                                className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/iamsaeedahmedashrafiofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on Instagram"
                                className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/iamsaeedahmedashrafi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Saeed Ahmed Ashrafi on Facebook"
                                className="flex size-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
                            >
                                <FaFacebookF size={18} />
                            </a>
                        </nav>
                    </div>
                </nav>
            </aside>
        </>
    );
}