import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
    return (
        <footer id="contact" className="bg-gray-50 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Info */}
                    <div>
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Visítanos</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8">
                            Estamos aquí para ti 📍
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Dirección</h3>
                                    <p className="text-gray-600">Carrer del Canonge Barceló, 2<br />07260 Porreres, Illes Balears</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Teléfono</h3>
                                    <a href="tel:971168388" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
                                        971 16 83 88
                                    </a>
                                    <p className="text-gray-500 text-sm mt-1">Llámanos para pedir cita o urgencias</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Horario</h3>
                                    <p className="text-gray-600">Lunes a Viernes: <span className="font-medium">09:30 - 13:30 | 16:30 - 20:00</span></p>
                                    <p className="text-gray-500 text-sm mt-1 italic">*Horario estimado, consultar para festivos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative">
                        <iframe
                            src="https://maps.google.com/maps?q=39.51576034782677,3.0211162305082433&hl=es&z=19&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        >
                        </iframe>
                        <a
                            href="https://maps.app.goo.gl/cA4zMVCzk91zZPmk9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 bg-white text-green-700 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-50 transition-colors text-sm flex items-center gap-2 z-10"
                        >
                            <MapPin size={16} /> Ver en Google Maps
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PETS Veterinary – Clínica Veterinaria Es Pla. Todos los derechos reservados.</p>
                    <div className="flex justify-center gap-4 mt-4">
                        {/* Socials placeholders */}
                        <a href="#" className="hover:text-green-600">Instagram</a>
                        <a href="#" className="hover:text-green-600">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
