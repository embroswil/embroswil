import { getProjets } from "@/lib/projets";
import ProjetCard from "./ProjetCard";

const ProjetsAccueil = async () => {
  const projets = await getProjets();

  return (
    <section
      id="projets"
      className="bg-white pb-12 pt-[110px] dark:bg-gray-dark md:pt-[140px]"
    >
      <div className="container">
        <p className="mb-1 text-sm font-medium text-primary">
          Embroswil · studio de produits numériques
        </p>
        <h1 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Nos projets
        </h1>
        {projets.length === 0 ? (
          <p className="text-body-color">Les projets arrivent bientôt.</p>
        ) : (
          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {projets.map((projet) => (
              <div
                key={projet.id}
                className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-auto"
              >
                <ProjetCard projet={projet} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjetsAccueil;
