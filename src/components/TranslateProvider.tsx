"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface TranslateProviderProps {
    lang: string;
    children: React.ReactNode;
}

/**
 * Mapping from URL lang code to Google Translate target code
 * Most are the same, but zh -> zh-CN for Simplified Chinese
 */
const LANG_TO_GT: Record<string, string> = {
    en: "en",
    fr: "fr",
    es: "es",
    ru: "ru",
    id: "id",
    ja: "ja",
    ko: "ko",
    zh: "zh-CN",  // Chinese Simplified
    ar: "ar",
    de: "de",
    it: "it",
    tr: "tr",
};

/**
 * TranslateProvider manages Google Translate integration with HIDDEN banner.
 * 
 * How it works:
 * 1. Sets googtrans cookie based on current lang (e.g., /en/fr for French)
 * 2. Reloads page ONCE when cookie changes (translation requires reload)
 * 3. Uses sessionStorage guard to prevent infinite reload loops
 * 4. Google Translate UI is hidden via CSS in globals.css
 * 
 * Cookie format: /en/fr means "translate from English to French"
 */
export default function TranslateProvider({ lang, children }: TranslateProviderProps) {
    const scriptInitialized = useRef(false);

    useEffect(() => {
        // Guard: Ensure we are in the browser
        if (typeof window === "undefined") return;

        // Get Google Translate target code (may differ from URL lang)
        const gtLang = LANG_TO_GT[lang] || lang;

        // Target cookie value based on current lang
        // EN = /en/en (or could clear, but /en/en is safer)
        // Others = /en/<gtLang>
        const targetCookie = `/en/${gtLang}`;
        const currentCookie = getCookie("googtrans");

        // Check sessionStorage guard to prevent reload loops
        const reloadedForLang = sessionStorage.getItem("gt_reloaded_for_lang");

        // Only set cookie and reload if:
        // 1. Cookie value is different from target
        // 2. We haven't already reloaded for this lang (prevents loops)
        if (currentCookie !== targetCookie && reloadedForLang !== lang) {
            // Set the cookie with path=/ so it persists across all routes
            document.cookie = `googtrans=${targetCookie}; path=/`;
            // Also set on .domain for subdomain support (optional but recommended)
            document.cookie = `googtrans=${targetCookie}; path=/; domain=${window.location.hostname}`;

            // Mark that we are about to reload for this lang
            sessionStorage.setItem("gt_reloaded_for_lang", lang);

            // Reload to apply translation (Google Translate reads cookie on page load)
            window.location.reload();
            return;
        }

        // If lang changed but we already reloaded, update the guard
        // This handles the case where user navigates without full reload
        if (reloadedForLang && reloadedForLang !== lang) {
            // User navigated to a different lang, but cookie might already be correct
            // If cookie matches, just update the guard
            if (currentCookie === targetCookie) {
                sessionStorage.setItem("gt_reloaded_for_lang", lang);
            }
        }

    }, [lang]);

    // Define googleTranslateElementInit BEFORE the script loads
    useEffect(() => {
        if (typeof window === "undefined" || scriptInitialized.current) return;

        // @ts-expect-error - Google Translate types not available
        window.googleTranslateElementInit = function () {
            // @ts-expect-error - Google Translate types not available
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false,  // Don't auto-show the translate bar
                includedLanguages: 'en,fr,es,ru,id,ja,ko,zh-CN,ar,de,it,tr',
                // @ts-expect-error - Google Translate types not available
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };

        scriptInitialized.current = true;
    }, []);

    return (
        <>
            {/* Hidden container for Google Translate widget - required but not visible */}
            <div
                id="google_translate_element"
                style={{ display: "none", visibility: "hidden", height: 0, overflow: "hidden" }}
            />

            {/* Load Google Translate script after page is interactive */}
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />

            {children}
        </>
    );
}

/**
 * Helper to read cookie value by name
 */
function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
}
