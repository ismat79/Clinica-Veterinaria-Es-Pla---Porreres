import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // Wait, I haven't created utils yet. I will create it or inline it.
// I'll skip cn for now or use template literals, or better, create lib/utils.ts first?
// Standard create-next-app adds lib/utils.ts? No, I deleted it implicitly by deleting app?
// Wait, create-next-app puts utils in lib/ if using src, or root if not?
// I'll assume I need to create it if I use `cn`.
// For now, I'll just use template literals to be safe, or clsx directly.

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "PETS Veterinary – Clínica Veterinaria Es Pla",
    description: "Clínica veterinaria en Porreres. Cuidamos de tu mascota como si fuera de nuestra familia. Medicina general, urgencias, y trato cercano.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}>
                {children}
            </body>
        </html>
    );
}
