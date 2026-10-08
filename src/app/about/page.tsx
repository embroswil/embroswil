import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Embroswil",
  description: "Découvrez Embroswil, studio qui conçoit et lance ses propres produits numériques.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À propos"
        description="Embroswil est un studio technologique qui imagine, développe et met sur le marché ses propres produits numériques."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
