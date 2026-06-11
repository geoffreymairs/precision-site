import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Auger Work", href: "/services/auger-work" },
  { label: "Stump Removal", href: "/services/stump-removal" },
  { label: "Backyard Work", href: "/services/backyard-work" },
  { label: "General Excavations", href: "/services/excavation" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/cropped-512.png"
                alt="Precision Digger Worx logo"
                width={44}
                height={44}
                className="rounded-full opacity-90"
              />
              <div>
                <p className="text-white font-bold leading-tight">Precision Digger Worx</p>
                <p className="text-stone-500 text-xs">Est. 2020</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Expert excavation, landscaping, and earthmoving services across
              Napier, Hastings, and the Hawke's Bay region.
            </p>
            <a
              href="tel:0226491618"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Call 022 649 1618
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                <a href="tel:0226491618" className="text-white font-semibold hover:text-amber-400 transition-colors text-lg">
                  022 649 1618
                </a>
              </li>
              <li>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:precisiondiggerworx@gmail.com" className="hover:text-amber-400 transition-colors break-all">
                  precisiondiggerworx@gmail.com
                </a>
              </li>
              <li>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-0.5">Address</p>
                <p>Dartmoor Road<br />Puketapu 4186<br />Hawke's Bay</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Precision Digger Worx Ltd. All rights reserved.</p>
          <p>Napier · Hastings · Hawke's Bay</p>
          <p>Website managed by <a href="https://www.catchie.nz/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Catchie</a></p>
        </div>
      </div>
    </footer>
  );
}
