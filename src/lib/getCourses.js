// src/lib/sanity.js
import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "h87i24mq", // ✅ replace with your real Sanity project ID
  dataset: "production",
  apiVersion: "2025-08-04", // ✅ use an ISO date
  useCdn: true,
});

export const getCourses = async () => {
  return await sanity.fetch(`*[_type == "course" && isPast != true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    tags,
    category,
    format,
    level,
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
  }`);
};
