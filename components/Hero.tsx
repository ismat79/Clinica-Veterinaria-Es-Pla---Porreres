import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image.png"
                    alt="Veterinaria abrazando a un perro feliz"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
                {/* Overlay - Gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent sm:from-white/90 sm:via-white/50 sm:to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-2xl text-center sm:text-left">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white sm:text-gray-900 leading-tight mb-6 drop-shadow-md sm:drop-shadow-none">
                        Cuidamos de tu mascota como si fuera{" "}
                        <span className="text-green-400 sm:text-green-600">parte de nuestra familia</span> 🐾
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 sm:text-gray-700 mb-8 font-medium max-w-lg mx-auto sm:mx-0 drop-shadow-sm sm:drop-shadow-none">
                        Tu clínica veterinaria de confianza en Porreres. Un equipo cercano y profesional liderado por mujeres apasionadas por los animales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <Link
                            href="#contact"
                            className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                        >
                            Pedir Cita <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:971168388"
                            className="bg-white/20 sm:bg-white text-white sm:text-green-700 border-2 border-white/50 sm:border-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Phone size={20} /> Llamar ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
