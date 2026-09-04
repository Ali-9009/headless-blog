export default function YoutubeVideoCard({ video }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
                <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                />
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug text-neutral-950">
                    {video.title}
                </h3>

                {video.description && (
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {video.description}
                    </p>
                )}
            </div>
        </article>
    );
}