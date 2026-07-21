import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "New Cars", href: "/new-cars" },
  { label: "Used Cars", href: "/used-cars" },
  { label: "Parts", href: "/parts" },
  { label: "Supplier Portal", href: "/#suppliers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6EDF6] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1210px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="autoSecure logo"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block text-[18px] font-black tracking-tight text-navy-900">
              auto<span className="text-gold-500">Secure</span>
            </span>
            <span className="block text-[10px] font-black tracking-[0.24em] text-[#8CA0C0]">
              MOBILITY
            </span>
          </span>
        </Link>

        <div className="flex items-center md:space-x-7">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-black text-[#1F2937] transition-colors hover:text-[#2454D6]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/new-cars"
            className="hidden h-11 items-center rounded-[8px] bg-[#2454D6] px-6 text-[14px] font-black text-white shadow-[0_8px_16px_rgba(36,84,214,0.25)] transition-colors hover:bg-[#1E49C4] sm:inline-flex"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    </header>
  );
}
