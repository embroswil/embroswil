import ProjetsAccueil from "@/components/Projets/ProjetsAccueil";
import Features from "@/components/Features";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embroswil | Studio de produits numériques",
  description:
    "Embroswil conçoit, développe et met sur le marché ses propres produits numériques : plateformes web, applications et outils d'IA.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <ProjetsAccueil />
      <Features />
    </>
  );
}
