import {
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";

export const metadata = {
    title: "Contact",
    description:
        "Contact Saeed Ahmed Ashrafi for inquiries, questions and communication.",
    alternates: {
        canonical: "/contact-us",
    },
};

export default function ContactPage() {
    return (
        <main>
            <section className="border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Get in touch
                    </p>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                        Contact Saeed Ahmed Ashrafi
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                        Have a question, inquiry or message? Use the contact
                        details below or send a message through the form.
                    </p>
                </div>
            </section>

            {/* Contact + Form */}
            <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
                {/* Left */}
                <aside>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Contact information
                    </p>

                    <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                        We would be happy to hear from you
                    </h2>

                    <p className="mt-5 max-w-lg leading-7 text-neutral-600">
                        Reach out directly through phone or email, or leave
                        your message using the contact form.
                    </p>

                    <div className="mt-10 space-y-4">
                        <a
                            href="tel:+920000000000"
                            className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm"
                        >
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                                <Phone
                                    size={19}
                                    className="text-neutral-700"
                                />
                            </span>

                            <span>
                                <span className="block text-sm text-neutral-500">
                                    Phone
                                </span>

                                <span className="mt-1 block font-semibold text-neutral-950">
                                    +92 300 9073824
                                </span>
                            </span>
                        </a>

                        <a
                            href="mailto:contact@saeedahmedashrafi.com"
                            className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm"
                        >
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                                <Mail
                                    size={19}
                                    className="text-neutral-700"
                                />
                            </span>

                            <span>
                                <span className="block text-sm text-neutral-500">
                                    Email
                                </span>

                                <span className="mt-1 block break-all font-semibold text-neutral-950">
                                    contact@saeedahmedashrafi.com
                                </span>
                            </span>
                        </a>

                        <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                                <MapPin
                                    size={19}
                                    className="text-neutral-700"
                                />
                            </span>

                            <div>
                                <p className="text-sm text-neutral-500">
                                    Location
                                </p>

                                <p className="mt-1 font-semibold text-neutral-950">
                                    Jama Masjid Ghousia shah faisal colony #02 Karachi
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Form */}
                <section
                    aria-labelledby="contact-form-title"
                    className="rounded-4xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10"
                >
                    <header>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                            Send a message
                        </p>

                        <h2
                            id="contact-form-title"
                            className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950"
                        >
                            How can we help?
                        </h2>
                    </header>

                    <form className="mt-8 space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Full name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="Your name"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="you@example.com"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Phone number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+92"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-neutral-800"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="What would you like to discuss?"
                                    className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-neutral-800"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                placeholder="Write your message here..."
                                className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm leading-6 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                        >
                            Send Message
                            <Send size={17} />
                        </button>
                    </form>
                </section>
            </section>

            {/* Map */}
            <section className="border-t border-neutral-200">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <header className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                            Location
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                            Find us on the map
                        </h2>
                    </header>

                    <figure className="overflow-hidden rounded-4xl border border-neutral-200 bg-neutral-100">
                        <iframe
                            title="Saeed Ahmed Ashrafi location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.3629087678858!2d67.14469965777153!3d24.881702756276965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3399ceabfd193%3A0x89f322367bd697d8!2sJamia%20Masjid%20Ghausia%20%26%20Jamia%20Ghausia%20Islamia!5e0!3m2!1sen!2s!4v1788533037739!5m2!1sen!2s"
                            width="100%"
                            height="480"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block w-full border-0"
                        />
                    </figure>
                </div>
            </section>
        </main>
    );
}