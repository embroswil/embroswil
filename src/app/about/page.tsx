import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Embroswil",
  description: "Découvrez embroswil, agence technologie spécialisée en sites web et applications.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À propos"
        description="Embroswil est une agence technologie qui conçoit des sites web et applications sur mesure, avec une approche pragmatique et des technologies modernes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
