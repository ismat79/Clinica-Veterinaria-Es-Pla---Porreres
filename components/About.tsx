import { Heart, ShieldCheck, UserRound } from "lucide-react";

const features = [
    {
        icon: <UserRound size={32} />,
        title: "Liderado por Mujeres",
        description: "Somos un equipo de veterinarias apasionadas y con gran vocación.",
    },
    {
        icon: <Heart size={32} />,
        title: "Trato Humano y Cercano",
        description: "Empatía en cada consulta. Entendemos lo que tu mascota significa para ti.",
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Alta Profesionalidad",
        description: "Medicina de calidad, formación continua y equipamiento moderno.",
    },
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-green-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Sobre Nosotras</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-6">
                        Más que una clínica, una familia para tu mascota ❤️
                    </h2>
                    <p className="text-gray-600 text-lg">
                        En PETS Veterinary – Clínica Veterinaria Es Pla, combinamos la medicina veterinaria de excelencia con un trato lleno de cariño.
                        Sabemos que visitar al veterinario puede ser estresante, por eso creamos un ambiente de calma y confianza.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-green-100 flex flex-col items-center text-center"
                        >
                            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
