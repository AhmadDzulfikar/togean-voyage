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
    return [{ lang: "en" }, { lang: "fr" }, { lang: "es" }];
}
