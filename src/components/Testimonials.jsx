// src/components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This training transformed my career. The instructors were knowledgeable, and the content was practical and hands-on.",
      name: "John Doe",
      role: "Petroleum Engineer",
      image: "/image/testimonials/john.jpg", // optional
    },
    {
      quote:
        "I gained valuable skills that I immediately applied at work. Highly recommend this program!",
      name: "Sarah Lee",
      role: "Geoscientist",
      image: "/image/testimonials/sarah.jpg", // optional
    },
    {
      quote:
        "The learning experience was top-notch. Great support and excellent resources throughout.",
      name: "Michael Smith",
      role: "Data Analyst",
      image: "/image/testimonials/michael.jpg", // optional
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Participants Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl shadow p-6 flex flex-col items-center"
            >
              {t.image && (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
              )}
              <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
