import Link from "next/link";
import { SoftiloLogo } from "@/components/ui/softilo-logo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#262038] bg-[#0b0912] pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <SoftiloLogo size="lg" className="mb-6" />
            <p className="max-w-sm leading-relaxed text-slate-300">
              A premier software engineering, EdTech, Travel ERP &amp; digital growth
              agency helping modern businesses dominate their market.
            </p>
          </div>

          <nav aria-label="Footer Quick Links">
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/#services" className="transition-colors hover:text-[#a855f7]">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/educational-solutions"
                  className="transition-colors hover:text-[#a855f7]"
                >
                  Educational Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/travel-solutions"
                  className="transition-colors hover:text-[#a855f7]"
                >
                  Travel Agency ERP
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors hover:text-[#a855f7]">
                  Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="transition-colors hover:text-[#a855f7]">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="mb-6 font-bold text-white">Contact &amp; Inquiries</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a
                  href="mailto:hello.softilo@gmail.com"
                  className="transition-colors hover:text-[#a855f7]"
                >
                  hello.softilo@gmail.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#a855f7]">
                  Book a Consultation
                </Link>
              </li>
              <li className="flex gap-3 pt-4">
                <a
                  href="https://www.facebook.com/softilo0"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Softilo on Facebook"
                  title="Softilo Official Facebook Page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#32294d] bg-[#13111c] text-slate-300 transition-all hover:border-[#7f0bed] hover:bg-[#7f0bed] hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/softilo"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Softilo on LinkedIn"
                  title="Softilo Official LinkedIn Company Page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#32294d] bg-[#13111c] text-slate-300 transition-all hover:border-[#7f0bed] hover:bg-[#7f0bed] hover:text-white"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#262038] pt-8 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Softilo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-[#a855f7]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#a855f7]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
