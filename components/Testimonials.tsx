import { Star, Quote } from "lucide-react";

const reviews = [
    {
        text: "Second to none. Superb service, excellent prices and above all phenomenal professionalism. I have 4 large dogs and since moving to the town we have been using Es Pla. As is normal we have had a few emergencies and the team at Es Pla have been there to help. I cannot recommend them highly enough. I'd like to save a specific thank you to the team at Es Pla for their diligence and warm welcome in some truly difficult situations. 10 out of 10.",
        author: "Mike Newman",
    },
    {
        text: "Tres grandes profesionales, mucha empatía con animales y sus acompañantes, más que recomendables.",
        author: "Xisco M s",
    },
    {
        text: "Sois las tres encantadoras. Tanto a nivel profesional como personal. Con vosotras nuestra familia siempre nos hemos sentido arropados incluso en los peores momentos !!! Os queremos ❤️❤️❤️",
        author: "mykela85jmd@gmail.com Mika",
    },
];

const Testimonials = () => {
    return (
        <section id="reviews" className="py-20 bg-green-900 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-800 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} fill="currentColor" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Lo que dicen de nosotras
                    </h2>
                    <p className="text-green-100 text-lg">
                        ⭐ 5,0 / 5 en Google (95 reseñas)
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-6 right-6 text-green-400 opacity-20" size={40} />
                            <p className="text-lg text-green-50 mb-6 italic">"{review.text}"</p>
                            <p className="font-bold text-white">— {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
