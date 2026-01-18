"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Sobre Nosotras", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Reseñas", href: "#reviews" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Placeholder Icon or just text */}
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        P
                    </div>
                    <span className="font-heading font-bold text-xl md:text-2xl text-green-900 tracking-tight">
                        PETS <span className="text-green-500">Veterinary</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-bold text-sm uppercase tracking-wide transition-colors",
                                scrolled ? "text-gray-600 hover:text-green-600" : "text-gray-900 hover:text-green-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:971168388"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
                    >
                        <Phone size={18} />
                        <span>971 16 83 88</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-green-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-800 hover:text-green-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:971168388"
                        className="flex justify-center items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-bold mt-2"
                    >
                        <Phone size={20} />
                        <span>Llamar Ahora</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
