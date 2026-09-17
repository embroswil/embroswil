import { project } from "@/types/project";

const projectData: project[] = [
  {
    id: 1,
    title: "Boza",
    paragraph:
      "Plateforme tout-en-un pour les demandes de visa, d'immigration, d'études et de travail à l'étranger, pensée pour simplifier des démarches souvent complexes.",
    image: "/images/project/project-01.jpg",
    author: {
      name: "Embroswil",
      image: "/images/project/author-01.png",
      designation: "Plateforme web",
    },
    tags: ["plateforme"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Akasa",
    paragraph:
      "Application qui génère automatiquement des vidéos à partir d'un simple sujet : script rédigé par IA et habillage visuel généré via l'API Pexels.",
    image: "/images/project/project-02.jpg",
    author: {
      name: "Embroswil",
      image: "/images/project/author-02.png",
      designation: "Application IA",
    },
    tags: ["ia"],
    publishDate: "2026",
  },
];
export default projectData;
