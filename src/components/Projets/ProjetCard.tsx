import Link from "next/link";
import { Projet, statutLabel } from "@/lib/projets";

export const statutCouleur: Record<Projet["statut"], string> = {
  en_developpement: "bg-amber-500/90 text-white",
  beta: "bg-blue-500/90 text-white",
  lance: "bg-green-600/90 text-white",
};

const ProjetCard = ({ projet }: { projet: Projet }) => {
  return (
    <Link
      href={`/project/${projet.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-one transition duration-300 hover:-translate-y-1 hover:shadow-three dark:bg-dark"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-light dark:bg-gray-dark">
        {projet.image_couverture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={projet.image_couverture}
            alt={projet.titre}
            className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/80 to-black">
            <span className="px-4 text-center text-2xl font-bold text-white">
              {projet.titre}
            </span>
          </div>
        )}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statutCouleur[projet.statut]}`}
        >
          {statutLabel[projet.statut]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {projet.categorie && (
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
            {projet.categorie}
          </p>
        )}
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
          {projet.titre}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-body-color">
          {projet.description}
        </p>
        <span className="text-sm font-semibold text-primary group-hover:underline">
          Voir le projet →
        </span>
      </div>
    </Link>
  );
};

export default ProjetCard;
