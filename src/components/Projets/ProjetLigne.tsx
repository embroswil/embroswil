import { Projet, statutLabel } from "@/lib/projets";

const statutCouleur: Record<Projet["statut"], string> = {
  en_developpement: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  beta: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  lance: "bg-green-500/15 text-green-600 dark:text-green-400",
};

const ProjetLigne = ({ projet }: { projet: Projet }) => {
  return (
    <article className="flex gap-4 rounded-lg bg-white p-3 shadow-one dark:bg-dark sm:p-4">
      <div className="h-24 w-28 shrink-0 overflow-hidden rounded-md bg-gray-light dark:bg-gray-dark sm:h-28 sm:w-40">
        {projet.image_couverture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={projet.image_couverture}
            alt={projet.titre}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/80 to-black p-2">
            <span className="text-center text-sm font-bold text-white">
              {projet.titre}
            </span>
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-base font-bold text-black dark:text-white sm:text-lg">
            {projet.titre}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statutCouleur[projet.statut]}`}
          >
            {statutLabel[projet.statut]}
          </span>
        </div>
        {projet.categorie && (
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
            {projet.categorie}
          </p>
        )}
        <p className="line-clamp-2 text-sm leading-snug text-body-color">
          {projet.description}
        </p>
        {projet.lien && (
          <a
            href={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Aperçu →
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjetLigne;
