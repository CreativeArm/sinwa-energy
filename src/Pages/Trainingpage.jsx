import { useEffect, useState } from "react";
import FilterSidebar from "../components/Training/FilterSidebar";
import PastTrainings from "../components/Training/PastTrainings";
import TrainingGrid from "../components/Training/TrainingGrid";
import TrainingHeader from "../components/Training/TrainingHeader";
import { getCourses } from "../lib/getCourses"; // ✅ adjust if your actual file name differs

export default function TrainingPage() {
  const [filters, setFilters] = useState({
    Categories: [],
    Format: [],
    Level: [],
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  // ✅ Apply filters with support for array values (category & level)
  const filteredTrainings = courses.filter((item) => {
    const matchCategory =
      filters.Categories.length === 0 ||
      filters.Categories.some((cat) =>
        Array.isArray(item.category)
          ? item.category.includes(cat)
          : item.category === cat
      );

    const matchFormat =
      filters.Format.length === 0 || filters.Format.includes(item.format);

    const matchLevel =
      filters.Level.length === 0 ||
      filters.Level.some((lvl) =>
        Array.isArray(item.level)
          ? item.level.includes(lvl)
          : item.level === lvl
      );

    return matchCategory && matchFormat && matchLevel;
  });

  return (
    <>
      <TrainingHeader />

      <section className="px-4 md:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              allTrainings={courses}
            />
          </div>

          {/* Main Training Cards */}
          <div className="w-full lg:w-3/4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
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
            ) : filteredTrainings.length > 0 ? (
              <TrainingGrid data={filteredTrainings} />
            ) : (
              <div className="text-center text-gray-500 text-sm py-12">
                No trainings found for selected filters.
              </div>
            )}
          </div>
        </div>

        {/* Past Trainings */}
        <div className="mt-20">
          <PastTrainings />
        </div>
      </section>
    </>
  );
}
