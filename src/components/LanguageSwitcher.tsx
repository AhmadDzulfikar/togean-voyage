"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";

/**
 * Language configuration
 * - code: 2-letter URL prefix (lowercase in URL, uppercase in UI)
 * - label: Display name in dropdown
 * - gt: Google Translate target code (may differ from URL code)
 */
const LANGUAGES = [
    { code: "en", label: "ENGLISH", gt: "en" },
    { code: "fr", label: "FRANCE", gt: "fr" },
    { code: "es", label: "SPANISH", gt: "es" },
    { code: "ru", label: "RUSSIAN", gt: "ru" },
    { code: "id", label: "INDONESIAN", gt: "id" },
    { code: "ja", label: "JAPANESE", gt: "ja" },
    { code: "ko", label: "KOREAN", gt: "ko" },
    { code: "zh", label: "CHINESE", gt: "zh-CN" },
    { code: "ar", label: "ARABIC (SAUDI)", gt: "ar" },
    { code: "de", label: "GERMAN", gt: "de" },
    { code: "it", label: "ITALIAN", gt: "it" },
    { code: "tr", label: "TURKISH", gt: "tr" },
];

/**
 * LanguageSwitcher - Custom language dropdown
 * - Navigation only via router.push()
 * - NO hard reload (TranslateProvider handles that)
 * - Preserves path, query, and hash when switching
 */
export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLangCode = (params.lang as string) || "en";
    const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on Escape
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    const handleLanguageSelect = (langCode: string) => {
        setIsOpen(false);

        if (langCode === currentLangCode) return;

        // Construct new path preserving everything after the lang segment
        // pathname looks like /en/about or /en
        const segments = pathname.split('/').filter(Boolean);

        if (segments[0] === currentLangCode) {
            segments[0] = langCode;
        } else {
            // If for some reason lang is missing, prepend it
            segments.unshift(langCode);
        }

        const newPath = `/${segments.join('/')}`;

        // Preserve query string and hash if present
        const url = new URL(window.location.href);
        const fullPath = `${newPath}${url.search}${url.hash}`;

        // Navigation only - TranslateProvider will handle reload if cookie changes
        router.push(fullPath);
    };

    return (
        <div className="relative z-50 font-avenir" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-xs md:text-sm uppercase tracking-widest hover:opacity-80 transition-opacity p-2"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                aria-label="Select Language"
            >
                <span>{currentLang.code.toUpperCase()}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu - scrollable if too many items */}
            <div
                className={`absolute top-full left-0 mt-2 w-40 max-h-80 overflow-y-auto bg-[#CB9275] shadow-lg rounded-sm flex flex-col transition-all duration-300 origin-top
          ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}
        `}
                role="menu"
            >
                {LANGUAGES.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`text-left px-4 py-3 text-xs md:text-sm text-white hover:bg-black/10 transition-colors uppercase tracking-widest flex items-center gap-2
               ${currentLangCode === lang.code ? "bg-black/20 font-semibold" : ""}
            `}
                        role="menuitem"
                    >
                        <span className="w-6 shrink-0">{lang.code.toUpperCase()}</span>
                        <span className="opacity-70 text-[10px]">{lang.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

// Export languages for use in other components if needed
export { LANGUAGES };
