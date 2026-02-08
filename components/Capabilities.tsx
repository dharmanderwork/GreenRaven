export default function Capabilities() {
    return (
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        {/* Top Right Pattern */}
        <div className="absolute top-0 right-0 w-[45%] h-[45%] pointer-events-none opacity-20">
          <svg
            className="absolute top-10 right-10"
            width="420"
            height="420"
            viewBox="0 0 210 210"
            fill="none"
          >
            {Array.from({ length: 210 }).map((_, i) => (
              <circle
                key={i}
                cx={(i % 15) * 14}
                cy={Math.floor(i / 15) * 14}
                r="2"
                fill="#525252"
              />
            ))}
          </svg>
        </div>
  
        {/* Bottom Left Pattern */}
        <div className="absolute bottom-0 left-0 w-[45%] h-[45%] pointer-events-none opacity-20">
          <svg
            className="absolute bottom-10 left-10"
            width="420"
            height="420"
            viewBox="0 0 210 210"
            fill="none"
          >
            {Array.from({ length: 210 }).map((_, i) => (
              <circle
                key={i}
                cx={(i % 15) * 14}
                cy={Math.floor(i / 15) * 14}
                r="2"
                fill="#525252"
              />
            ))}
          </svg>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          {/* SECTION HEADER */}
          <p className="text-sm uppercase tracking-wider text-neutral-400 mb-6">
            Meeting the energy needs for tomorrow
          </p>
  
          <h2 className="text-4xl xl:text-5xl font-semibold leading-tight max-w-3xl mb-10">
            A Central Hub for Commercial Energy
            Projects Nationwide
          </h2>
  
          <p className="text-neutral-300 max-w-3xl mb-20 text-lg">
            Green Raven supports the energy production industry as a central hub —
            primarily in commercial solar, while also supporting geothermal,
            generators, and other power solutions. We help customers execute
            projects efficiently by removing friction across the supply chain.
          </p>
  
          {/* CAPABILITIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-16">
            {/* Capability */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                Manufacturer-Direct Equipment Distribution
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Nationwide distribution of solar, battery, inverter, and energy
                equipment — any volume, shipped directly from manufacturers
                without unnecessary markups.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-medium mb-4">
                Installer & Project Matchmaking
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                We connect sales organizations with trusted installer partners,
                helping projects move forward faster with the right teams in
                place.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-medium mb-4">
                Commercial & Residential Financing
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Access to commercial and residential financing tools, including
                PPA structures for solar and geothermal projects.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-medium mb-4">
                Permit-Ready Engineering & Design
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Fast, accurate engineering services that deliver permit-ready
                designs — even for projects others consider impossible.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-medium mb-4">
                Expanded Power Solutions
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Commercial generators, geothermal systems, and alternative power
                solutions designed to meet site-specific energy constraints.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  