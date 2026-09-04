export default function YoutubeShortCard({ short }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-neutral-200">
            <div className="relative aspect-9/16 w-full overflow-hidden bg-black">
                <iframe
                    src={`https://www.youtube.com/embed/${short.id}`}
                    title={short.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                />
            </div>
        </article>
    );
}