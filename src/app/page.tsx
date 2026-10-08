import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Project from "@/components/project";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embroswil | Sites web et applications sur mesure",
  description:
    "Embroswil — agence technologie : sites web et applications sur mesure",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Project />
    </>
  );
}
