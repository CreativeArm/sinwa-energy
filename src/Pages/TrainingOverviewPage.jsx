import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";
import RegisterModal from "../components/RegisterModal";

export default function TrainingOverviewPage() {
  const { id } = useParams(); // assuming you're passing Sanity _id
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sanity

      .fetch(
        `*[_type == "course" && _id == $id][0]{
  _id,
  title,
  tags,
  price,
  duration,
  date,
  schedule,
  format,
  hours,
  totalHours,
  overview,
  learningPoints,
  targetAudience,
  isPast,
  "imageUrl": image.asset->url,
  courseContent
}`,
        { id }
      )
      .then((data) => {
        setTraining(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading training details...
      </div>
    );
  }

  if (!training) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        Training not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 md:px-10 py-16 mt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title + Tags */}
        <div className="mb-10 space-y-4">
          <nav className="text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>{" "}
                /
              </li>
              <li>
                <a href="/trainings" className="hover:underline">
                  Training
                </a>{" "}
                /
              </li>
              <li className="text-sky-500 font-medium truncate">
                {training.title}
              </li>
            </ol>
          </nav>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-700">
              {training.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {training.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-sky-50 text-sky-600 text-xs px-6 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-3/4 space-y-8">
            <div className="w-full lg:py-16 lg:h-[900px] rounded-xl shadow overflow-hidden">
              <img
                src={training.imageUrl}
                alt={training.title}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Overview */}
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                Overview
              </h2>
              <p className="text-md text-gray-500 lg:text-lg leading-relaxed whitespace-pre-line">
                {training.overview}
              </p>
            </div>

            {/* Learning Points */}
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4 lg:text-2xl ">
                What you will learn
              </h2>
              <ul className="list-disc ml-5 text-md lg:text-lg text-gray-500 space-y-1">
                {training.learningPoints?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white border p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4 lg:text-2xl ">
                Target Audience
              </h2>
              <p className="text-md text-gray-500 lg:text-lg">
                {training.targetAudience}
              </p>
            </div>
            {training.courseContent?.length > 0 && (
              <div className="bg-white border p-6 rounded-xl shadow-sm mt-8">
                <h2 className="text-xl font-semibold mb-4 lg:text-2xl">
                  Course Content
                </h2>
                <ul className="list-disc ml-5 text-md lg:text-lg text-primary space-y-2">
                  {training.courseContent.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (Sticky) */}
          <div className="w-full lg:w-1/4">
            <div
              className={`sticky top-28 bg-white border rounded-xl p-4 shadow-md transition-opacity duration-300`}
            >
              <p className="text-lg text-gray-600 mb-3 font-medium">
                This course Details
              </p>
              <ul className="text-lg text-gray-500 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon1.png" alt="" className="w-5 h-5" />
                  <span>{training.duration}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon3.png" alt="" className="w-5 h-5" />
                  <span>{training.date}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon2.png" alt="" className="w-5 h-5" />
                  <span>{training.schedule}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon4.png" alt="" className="w-5 h-5" />
                  <span>{training.format}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon5.png" alt="" className="w-5 h-5" />
                  <span>{training.hours}</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/image/icon/icon6.png" alt="" className="w-5 h-5" />
                  <span>{training.totalHours}</span>
                </li>
              </ul>
              <p className="text-center text-primary text-2xl font-bold mt-2">
                {training.price}
              </p>

              <button
                onClick={() => {
                  if (!training.isPast) {
                    setIsModalOpen(true);
                  }
                }}
                disabled={training.isPast}
                className={`mt-4 w-full text-white text-sm font-medium py-2 rounded-md transition ${
                  training.isPast
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-blue-600"
                }`}
              >
                {training.isPast ? "Registration Closed" : "Register Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <RegisterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
