import Footer from "@/Components/footer";
import Header from "@/Components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portifolio",
    description:
        "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}