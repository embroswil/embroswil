import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Embroswil",
  description: "Contactez Embroswil : partenariats, investissement, presse ou questions sur nos produits.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Une question ou une proposition de partenariat ? Écrivez-nous."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
