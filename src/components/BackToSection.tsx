import Link from "next/link";

interface BackToSectionProps {
    href: string;
    label?: string;
    className?: string; // Add className prop
}

export default function BackToSection({ href, label = "Back", className }: BackToSectionProps) {
    return (
        <div className="pt-4 md:pt-6">
            <Link
                href={href}
                className={`inline-flex items-center gap-2 transition-colors group ${className || "text-neutral-900 hover:text-accent"}`}
                scroll={true}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="font-avenir uppercase tracking-widest text-xs md:text-sm">
                    {label}
                </span>
            </Link>
        </div>
    );
}
