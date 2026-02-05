"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products and Services", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Green<span className="text-secondary">Raven</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 ${
                pathname === item.href
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
