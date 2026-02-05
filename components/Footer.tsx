import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
       
        <div>
          <h3 className="text-2xl font-bold text-white">
          Green<span className="text-secondary text-green-600">Raven</span>
          </h3>
          <p className="mt-4 text-sm">
            Powering homes and businesses with clean, affordable solar energy.
          </p>
          <p className="mt-4 text-sm">
            🌱 Clean Energy. Smart Investment.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-white">About Us</Link></li>
            <li><Link href="#careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Residential Solar</li>
            <li>Commercial Solar</li>
            <li>Maintenance & Support</li>
            <li>Energy Storage</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@GreenRaven.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Mon–Fri: 9AM–6PM</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© {new Date().getFullYear()} GreenRaven. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
    )
}