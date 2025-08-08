// src/components/Training/PastTrainings.jsx

import { useEffect, useState } from "react";
import TrainingCard from "./TrainingCard";
import { sanity } from "../../lib/getCourses";

export default function PastTrainings() {
  const [pastCourses, setPastCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "course" && isPast == true] | order(_createdAt desc) {
        _id,
        title,
        slug,
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
        "imageUrl": image.asset->url
      }`
      )
      .then((data) => {
        setPastCourses(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="lg:px-[200px] md:px-0 justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center md:text-left">
        Past <span className="text-primary">Trainings</span>
      </h2>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastCourses.map((training) => (
            <TrainingCard
              key={training._id}
              training={training}
              clickable={true}
              showRegisterButton={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}
