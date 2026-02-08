import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Dot Pattern – unchanged */}
            <div className="absolute top-0 right-0 w-[65%] h-[70%] pointer-events-none">
                <svg
                    className="absolute top-10 right-10 opacity-[0.15]"
                    width="520"
                    height="520"
                    viewBox="0 0 260 260"
                    fill="none"
                >
                    {Array.from({ length: 260 }).map((_, i) => (
                        <circle
                            key={i}
                            cx={(i % 20) * 13}
                            cy={Math.floor(i / 20) * 13}
                            r="2"
                            fill="#9CA3AF"
                        />
                    ))}
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
                {/* TEXT CONTENT */}
                <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-6">
                    Powering a sustainable future
                </p>

                <h1 className="text-5xl xl:text-6xl font-semibold text-gray-900 leading-[1.1] mb-8">
                    Premium Solar Solutions Designed for
                    Modern Commercial & Residential Energy
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl mb-12">
                    Green Raven supports the energy production industry by providing
                    manufacturer-direct solar equipment, engineering support, financing
                    tools, and nationwide logistics — removing friction at every stage of
                    project execution.
                </p>

                {/* CTA */}
                <div className="flex gap-5 mb-20">
                    <button className="px-9 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
                        Schedule a Call
                    </button>
                    <button className="px-9 py-4 rounded-full border border-gray-300 text-gray-900 font-medium hover:border-gray-900 transition">
                        Explore Solutions
                    </button>
                </div>

                {/* IMAGE LAYOUT – AESTHETIC / PREMIUM */}
                {/* IMAGE GRID – TALLER, PREMIUM SCALE */}
                {/* IMAGE COLLAGE – FULL HEIGHT, PREMIUM */}
                <div className="relative mt-20 h-[80vh] min-h-[760px] max-h-[900px]">
                    {/* Soft background integration */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none z-0" />

                    {/* LEFT VERTICAL IMAGE */}
                    <div className="absolute left-0 top-0 w-[22%] h-full rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
                        <Image
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                            alt="Commercial solar rooftop"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* TOP LEFT WIDE */}
                    <div className="absolute left-[25%] top-[6%] w-[38%] h-[28%] rounded-[32px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                            alt="Solar installation site"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* TOP RIGHT HERO IMAGE */}
                    <div className="absolute right-0 top-[-6%] w-[34%] h-[48%] rounded-[40px] overflow-hidden z-20 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
                        <Image
                            src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
                            alt="Modern rooftop solar"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* CENTER BRIDGE IMAGE */}
                    <div className="absolute left-[28%] top-[40%] w-[30%] h-[32%] rounded-[32px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
                            alt="Solar panels detail"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* BOTTOM RIGHT ANCHOR */}
                    <div className="absolute right-[4%] bottom-[6%] w-[44%] h-[38%] rounded-[36px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727"
                            alt="Large scale solar array"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                </div>


            </div>
        </section>
    );
}
