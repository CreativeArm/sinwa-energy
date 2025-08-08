// src/components/Home/FeaturedTrainings.jsx

import { useEffect, useState } from "react";
import TrainingCard from "./Training/TrainingCard";
import { getCourses } from "../lib/getCourses";
export default function FeaturedTrainings() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses().then((courses) => {
      const top3 = courses.slice(0, 3); // show first 3
      setFeaturedCourses(top3);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
          Featured <span className="text-primary">Trainings</span>
        </h2>

        {/* Training Cards */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse space-y-3 border rounded-xl p-4 shadow"
              >
                <div className="bg-gray-300 h-40 w-full rounded" />
                <div className="bg-gray-300 h-5 w-3/4 rounded" />
                <div className="bg-gray-300 h-4 w-1/2 rounded" />
                <div className="bg-gray-200 h-3 w-full rounded mt-2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((training) => (
              <TrainingCard key={training._id} training={training} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/trainings"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md text-sm hover:bg-blue-600 transition"
          >
            Browse All Training Programs
          </a>
        </div>
      </div>
    </section>
  );
}
