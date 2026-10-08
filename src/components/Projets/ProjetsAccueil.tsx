import { getProjets } from "@/lib/projets";
import ProjetCard from "./ProjetCard";

const ProjetsAccueil = async () => {
  const projets = await getProjets();

  return (
    <section
      id="projets"
      className="bg-gray-light pb-14 pt-[110px] dark:bg-bg-color-dark md:pt-[140px]"
    >
      <div className="container">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">
            Embroswil · studio de produits numériques
          </p>
          <h1 className="mb-2 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            Nos projets
          </h1>
          <p className="mb-8 text-base text-body-color">
            Les produits que nous préparons pour le marché.
          </p>
          {projets.length === 0 ? (
            <p className="text-body-color">Les projets arrivent bientôt.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {projets.map((projet) => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjetsAccueil;
