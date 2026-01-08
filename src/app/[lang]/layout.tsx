import TranslateProvider from "@/components/TranslateProvider";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return <TranslateProvider lang={lang}>{children}</TranslateProvider>;
}

export async function generateStaticParams() {
    return [
        { lang: "en" },
        { lang: "fr" },
        { lang: "es" },
        { lang: "ru" },
        { lang: "id" },
        { lang: "ja" },
        { lang: "ko" },
        { lang: "zh" },
        { lang: "ar" },
        { lang: "de" },
        { lang: "it" },
        { lang: "tr" },
    ];
}
