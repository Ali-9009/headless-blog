import Link from "next/link";

export default function Breadcrumbs({ items }) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-neutral-500"
        >
            <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => {
                    const last = index === items.length - 1;

                    return (
                        <li
                            key={item.href || item.label}
                            className="flex items-center gap-2"
                        >
                            {last ? (
                                <span
                                    aria-current="page"
                                    className="text-neutral-700"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="transition hover:text-black"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {!last && (
                                <span aria-hidden="true">/</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}