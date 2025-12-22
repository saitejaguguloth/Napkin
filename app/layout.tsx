import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NAPKIN - Turn Sketches Into Real UI",
    description: "AI-powered Napkin-to-Reality Prototype Wizard. Transform hand-drawn sketches into working UI code using multimodal AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-grain">{children}</body>
        </html>
    );
}
