import { Projet, statutLabel } from "@/lib/projets";

const statutCouleur: Record<Projet["statut"], string> = {
  en_developpement: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  beta: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  lance: "bg-green-500/15 text-green-600 dark:text-green-400",
};

const ProjetCard = ({ projet }: { projet: Projet }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-one dark:bg-dark">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-light dark:bg-gray-dark">
        {projet.image_couverture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={projet.image_couverture}
            alt={projet.titre}
            className="h-full w-full object-cover object-top"
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
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${statutCouleur[projet.statut]}`}
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
        <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
          {projet.titre}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-body-color">
          {projet.description}
        </p>
        <div className="flex items-center justify-between border-t border-body-color/10 pt-3 text-sm">
          <span className="text-body-color">
            Sortie : {projet.sortie_prevue || "à définir"}
          </span>
          {projet.lien && (
            <a
              href={projet.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Aperçu →
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjetCard;
