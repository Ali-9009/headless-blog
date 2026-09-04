import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
            <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                    404
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950">
                    Page not found
                </h1>

                <p className="mt-4 text-neutral-600">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}