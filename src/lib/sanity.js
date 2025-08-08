import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "h87i24mq", // ← use your real projectId
  dataset: "production",
  apiVersion: "2023-08-01", // ← any valid ISO date
  useCdn: true,
});
