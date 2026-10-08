import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Project from "@/components/project";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
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
      <AboutSectionOne />
      <AboutSectionTwo />
      <Project />
      <Contact />
    </>
  );
}
