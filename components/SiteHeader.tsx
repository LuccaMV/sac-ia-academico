import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { key: "projeto", href: "/", label: "Projeto" },
  { key: "chat", href: "/chat", label: "Chat" },
] as const;

export type SiteSection = (typeof NAV)[number]["key"];

export function SiteHeader({ active, status }: { active: SiteSection; status?: ReactNode }) {
  return (
    <header className="sticky top-0 z-30 shrink-0 border-b border-line bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:gap-5">
        <Link
          href="/"
          aria-label="SAC IA Acadêmico, página do projeto"
          className="rounded-lg transition duration-200 hover:opacity-80 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <BrandLockup />
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface p-1">
            {NAV.map((item) => {
              const current = item.key === active;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`block rounded-full px-3.5 py-1.5 text-sm font-semibold transition duration-200 ease-soft active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      current ? "bg-user text-user-ink shadow-sm" : "text-muted hover:bg-accent-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {status}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
