import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Embroswil",
  description: "Contactez embroswil pour votre prochain projet web ou application.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Une idée de site ou d'application ? Parlons-en."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
