"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { createPortal } from "react-dom";

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
 * - Dropdown anchored below navbar (not just button)
 * - Rectangular panel with shadow, no rounded corners
 * - Navigation only via router.push()
 */
export default function LanguageSwitcher({ isTransparent = false }: { isTransparent?: boolean }) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    const currentLangCode = (params.lang as string) || "en";
    const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

    // Mount check for portal
    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate dropdown position based on navbar
    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;

        // Find the navbar header element
        const navbar = triggerRef.current.closest('header');
        if (!navbar) return;

        const navbarRect = navbar.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();

        setDropdownPosition({
            top: navbarRect.bottom, // Position below navbar
            left: triggerRect.left, // Align with trigger button
        });
    }, []);

    // Update position when opening
    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.addEventListener('scroll', updatePosition, true);
            window.addEventListener('resize', updatePosition);
        }
        return () => {
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isOpen, updatePosition]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                triggerRef.current && !triggerRef.current.contains(target) &&
                dropdownRef.current && !dropdownRef.current.contains(target)
            ) {
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

        const segments = pathname.split('/').filter(Boolean);

        if (segments[0] === currentLangCode) {
            segments[0] = langCode;
        } else {
            segments.unshift(langCode);
        }

        const newPath = `/${segments.join('/')}`;
        const url = new URL(window.location.href);
        const fullPath = `${newPath}${url.search}${url.hash}`;

        router.push(fullPath);
    };

    // Dropdown menu rendered via portal to position relative to viewport
    const dropdownMenu = mounted && isOpen ? createPortal(
        <div
            ref={dropdownRef}
            className="fixed z-[100] font-avenir"
            style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
            }}
        >
            <div
                className={`
                    w-48 max-h-[70vh] overflow-y-auto
                    bg-[#CB9275] 
                    shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                    flex flex-col
                    transition-all duration-300 ease-out origin-top
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                `}
                style={{ borderRadius: 0 }}
                role="menu"
            >
                {/* Dropdown items with comfortable spacing */}
                {LANGUAGES.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`
                            text-left px-5 py-3.5
                            text-sm text-white
                            hover:bg-black/10
                            transition-colors duration-200
                            uppercase tracking-wider
                            leading-relaxed
                            flex items-center gap-3
                            ${currentLangCode === lang.code ? "bg-black/15 font-medium" : "font-normal"}
                        `}
                        role="menuitem"
                    >
                        <span className="w-7 font-medium">{lang.code.toUpperCase()}</span>
                        <span className="opacity-80 text-xs">{lang.label}</span>
                    </button>
                ))}
            </div>
        </div>,
        document.body
    ) : null;

    return (
        <>
            {/* Trigger Button */}
            <button
                ref={triggerRef}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1.5 text-xs md:text-sm uppercase tracking-widest hover:opacity-80 transition-opacity p-2 font-avenir ${isTransparent ? "text-white" : "text-neutral-900"
                    }`}
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

            {/* Portal-rendered dropdown */}
            {dropdownMenu}
        </>
    );
}

// Export languages for use in other components if needed
export { LANGUAGES };
