import { getProjets } from "@/lib/projets";
import ProjetLigne from "./ProjetLigne";

const ProjetsAccueil = async () => {
  const projets = await getProjets();

  return (
    <section
      id="projets"
      className="bg-white pb-10 pt-[110px] dark:bg-gray-dark md:pt-[140px]"
    >
      <div className="container">
        <div className="mx-auto max-w-[1000px]">
          <p className="mb-1 text-sm font-medium text-primary">
            Embroswil · studio de produits numériques
          </p>
          <h1 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Nos projets
          </h1>
          {projets.length === 0 ? (
            <p className="text-body-color">Les projets arrivent bientôt.</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              {projets.map((projet) => (
                <ProjetLigne key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjetsAccueil;
