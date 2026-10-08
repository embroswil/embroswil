import Link from "next/link";
import { Projet, statutLabel } from "@/lib/projets";

export const statutCouleur: Record<Projet["statut"], string> = {
  en_developpement: "bg-amber-400 text-black",
  beta: "bg-blue-500 text-white",
  lance: "bg-green-500 text-white",
};

const ProjetCard = ({ projet }: { projet: Projet }) => {
  return (
    <Link
      href={`/project/${projet.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-three ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark dark:ring-white/10"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-dark">
        {projet.image_couverture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={projet.image_couverture}
            alt={projet.titre}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow ${statutCouleur[projet.statut]}`}
        >
          {statutLabel[projet.statut]}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {projet.categorie && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/75">
              {projet.categorie}
            </p>
          )}
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            {projet.titre}
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5">
        <p className="line-clamp-2 min-h-[2.75rem] flex-1 text-sm leading-snug text-body-color sm:text-base">
          {projet.description}
        </p>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-white transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
};

export default ProjetCard;
