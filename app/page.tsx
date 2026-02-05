import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
          alt="Commercial solar rooftop"
          fill
          className="object-cover opacity-60"
          priority
        />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
              Meeting the Energy Needs for Tomorrow
            </h1>

            <p className="mt-6 text-lg text-slate-200 max-w-2xl">
              Manufacturer-direct solar, geothermal, and power solutions —
              supported by financing, engineering, and nationwide logistics.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://calendar.app.google/9qsvNemHcAkYwesn9"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Schedule a Call
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / POSITIONING */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl leading-relaxed text-slate-700">
            Green Raven supports the energy production industry as a central hub —
            primarily in commercial solar, while also supporting geothermal,
            generators, and other power solutions.
          </p>

          <p className="mt-6 text-lg text-slate-600">
            We help customers execute projects by combining direct manufacturer
            access with installer matchmaking, financing tools, and permit-ready
            engineering support.
          </p>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            What GreenRaven Delivers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturer-Direct Distribution",
                desc: "Nationwide equipment supply at any volume without layered markups.",
              },
              {
                title: "Installer & Project Matchmaking",
                desc: "Connecting sales organizations with trusted installation partners.",
              },
              {
                title: "Commercial & Residential Financing",
                desc: "PPA options starting at 50 kW including solar and geothermal.",
              },
              {
                title: "Permit-Ready Engineering",
                desc: "Fast, accurate commercial designs — even for complex projects.",
              },
              {
                title: "Geothermal & Generator Solutions",
                desc: "Alternative power options when traditional solar isn’t feasible.",
              },
              {
                title: "Business Infrastructure Services",
                desc: "CRM systems, automation consulting, and sales optimization tools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm border"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + TRUST SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Built for Commercial-Scale Energy Projects
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From rooftop solar installations to geothermal systems and
              generators, GreenRaven removes friction from sourcing, financing,
              and execution.
            </p>
            <p className="mt-4 text-slate-600">
              We operate as a long-term problem-solving partner — not just a
              distributor.
            </p>
          </div>

          <div className="relative h-100 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
              alt="Solar installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Let’s Talk About Your Next Project
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Whether you are a sales organization, installer, financier, or
            developer — GreenRaven is ready to support your growth.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://calendar.app.google/9qsvNemHcAkYwesn9"
              className="bg-secondary text-dark px-8 py-4 rounded-lg font-semibold"
            >
              Book a Meeting
            </a>
            <a
              href="/contact"
              className="border border-white px-8 py-4 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
