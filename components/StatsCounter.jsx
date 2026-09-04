"use client";

import { useEffect, useRef, useState } from "react";
import {
    BookOpen,
    Play,
    Users,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const stats = [
    {
        label: "YouTube Subscribers",
        value: 120,
        suffix: "K+",
        icon: FaYoutube,
    },
    {
        label: "Published Articles",
        value: 150,
        suffix: "+",
        icon: BookOpen,
    },
    {
        label: "Videos",
        value: 300,
        suffix: "+",
        icon: Play,
    },
    {
        label: "Social Followers",
        value: 200,
        suffix: "K+",
        icon: Users,
    },
];

function Counter({ value, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) {
                    return;
                }

                started.current = true;

                const duration = 1400;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const eased =
                        1 - Math.pow(1 - progress, 3);

                    setCount(
                        Math.floor(value * eased)
                    );

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
                observer.disconnect();
            },
            {
                threshold: 0.4,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    return (
        <section
            aria-labelledby="community-stats"
            className="border-y border-neutral-200 bg-white"
        >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
                <header className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Growing Community
                    </p>

                    <h2
                        id="community-stats"
                        className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950"
                    >
                        Knowledge reaching people everywhere
                    </h2>
                </header>

                <div className="grid grid-cols-2 border-l border-t border-neutral-200 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <article
                                key={stat.label}
                                className="border-b border-r border-neutral-200 p-6 sm:p-8 lg:p-10"
                            >
                                <div className="flex size-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                                    <Icon size={20} />
                                </div>

                                <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                                    <Counter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                    />
                                </p>

                                <p className="mt-2 text-sm leading-6 text-neutral-500">
                                    {stat.label}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}