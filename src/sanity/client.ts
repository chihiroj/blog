import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "b0qmt4ba",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});