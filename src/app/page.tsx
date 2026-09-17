import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Project from "@/components/project";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embroswil",
  description: "Embroswil — agence technologie : sites web et applications sur mesure",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Project />
      <Contact />
    </>
  );
}
