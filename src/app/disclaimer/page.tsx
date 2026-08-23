import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Julio Ponder Seneres",
  description:
    "Demonstration notice and disclaimer for the Julio Ponder Seneres institutional portfolio.",
  alternates: {
    canonical: "/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "Purpose of the Website",
    content: (
      <>
        <p>
          This website demonstrates digital presentation, interface design,
          technical development, and related creative work.
        </p>

        <p>
          References to organizations, institutions, companies, projects,
          individuals, locations, financial matters, or other entities do not
          necessarily indicate a legal, commercial, financial, employment,
          partnership, or institutional relationship.
        </p>

        <p>
          Any content identified as conceptual, simulated, or created for
          demonstration purposes should be understood accordingly.
        </p>
      </>
    ),
  },
  {
    title: "No Professional Advice",
    content: (
      <>
        <p>
          The information on this website does not constitute legal, financial,
          investment, accounting, medical, technical, or other professional
          advice.
        </p>

        <p>
          Information provided for educational or illustrative purposes should
          not be used as a substitute for advice from a qualified professional.
        </p>
      </>
    ),
  },
  {
    title: "Accuracy and Availability",
    content: (
      <>
        <p>
          Reasonable efforts may be made to ensure that the information on this
          website is accurate and available. However, no guarantee is made that
          the content is complete, current, uninterrupted, or free from errors.
        </p>

        <p>
          The website's content, pages, links, images, and other materials may
          be changed, suspended, or removed without notice.
        </p>
      </>
    ),
  },
  {
    title: "External Links",
    content: (
      <>
        <p>
          This website may include links to third-party websites or services.
          These links are provided for convenience or reference only.
        </p>

        <p>
          LGC does not control or necessarily endorse third-party websites and
          is not responsible for their content, availability, security, privacy
          practices, or policies.
        </p>

        <p>
          Users should review the terms of use and privacy policies of any
          third-party website or service before using it.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the website's design, original text,
          interface elements, graphics, code, and other original materials are
          protected by applicable intellectual property laws.
        </p>

        <p>
          Third-party names, trademarks, logos, and other references remain the
          property of their respective owners.
        </p>

        <p>
          Nothing on this website grants permission to copy, reproduce,
          distribute, modify, or commercially use protected materials without
          the appropriate authorization.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Questions about this website, its content, or its demonstration status
        may be submitted through the website's{" "}
        <Link
          href="/contact"
          className="text-[#c9a24a] underline decoration-[#c9a24a]/30 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white/40"
        >
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a24a]">
              Legal &amp; Notice
            </p>

            <h1 className="font-serif text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              Disclaimer
            </h1>

            <div className="mt-8 h-px w-16 bg-[#c9a24a]" />

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-[15px]">
              This page provides important information regarding the nature,
              purpose, and use of this website and its materials.
            </p>
          </div>
        </div>
      </section>

      {/* Demonstration Notice */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
            {/* Section Marker */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9a24a]">
                Notice
              </p>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl tracking-tight text-white sm:text-3xl">
                Demonstration Notice
              </h2>

              <div className="mt-8 space-y-6 text-sm leading-8 text-white/55 sm:text-[15px]">
                <p>
                  This website is provided as a demonstration and portfolio
                  project. Its content, design, organizational references, and
                  other materials are intended for illustrative and
                  informational purposes only, unless expressly stated
                  otherwise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Disclaimer Sections */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid gap-10 py-14 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-20 ${
                index !== sections.length - 1
                  ? "border-b border-white/[0.07]"
                  : ""
              }`}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {section.title}
                </h2>
              </div>

              <div className="max-w-3xl space-y-6 text-sm leading-8 text-white/55 sm:text-[15px]">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Notice */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-14 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
              Last updated: August 2026
            </p>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-[#c9a24a]"
            >
              Return to Portfolio
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
