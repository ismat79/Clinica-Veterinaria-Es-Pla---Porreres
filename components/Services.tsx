import { Stethoscope, Ambulance, Activity, HandHeart } from "lucide-react";

const services = [
    {
        icon: <Stethoscope size={40} />,
        title: "Medicina General",
        description: "Revisiones completas, vacunación, desparasitación y cuidados preventivos para mantener a tu peludo sano.",
    },
    {
        icon: <Ambulance size={40} />,
        title: "Urgencias",
        description: "Atención rápida y eficaz cuando más lo necesitas. Estamos preparados para actuar.",
    },
    {
        icon: <Activity size={40} />,
        title: "Atención Personalizada",
        description: "Planes de salud adaptados a la edad y necesidades específicas de cada animal.",
    },
    {
        icon: <HandHeart size={40} />,
        title: "Acompañamiento",
        description: "Apoyo cercano y respetuoso en momentos difíciles y cuidados paliativos.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Servicios Veterinarios</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-2">
                        Cuidado integral para ellos 🩺
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/10 transition-all bg-gray-50 hover:bg-white"
                        >
                            <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
