import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Work Gallery | Precision Digger Worx — Hawke's Bay",
  description:
    "Browse real completed jobs by Precision Digger Worx — excavation, driveways, landscaping, trenching and more across Napier, Hastings and Hawke's Bay.",
};

export default function Gallery() {
  return <GalleryPage />;
}
