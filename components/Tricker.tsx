export default function Ticker() {
    const items = [
      "Direct Manufacturer Relationships",
      "Nationwide U.S. Shipping",
      "Commercial & Residential Installations Supported",
      "Installer-Only Distribution",
      "Geothermal Solutions",
      "Engineering",
      "Commercial Financing",
      "Solar-specific CRM",
    ];
  
    return (
      <div className="bg-slate-100 overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-10 px-6">
          {items.concat(items).map((item, i) => (
            <span key={i} className="text-sm font-semibold text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }
  