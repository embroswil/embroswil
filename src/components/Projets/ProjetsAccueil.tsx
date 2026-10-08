import Link from "next/link";
import { getProjets } from "@/lib/projets";
import ProjetCard from "./ProjetCard";

const ProjetsAccueil = async () => {
  const projets = await getProjets();
  if (projets.length === 0) return null;

  return (
    <section id="projets" className="pb-6 pt-14 md:pt-20">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Nos projets
            </h2>
            <p className="mt-1 text-base text-body-color">
              Les produits que nous développons en ce moment.
            </p>
          </div>
          <Link
            href="/project"
            className="shrink-0 text-sm font-semibold text-primary hover:underline"
          >
            Tout voir →
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
            >
              <ProjetCard projet={projet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetsAccueil;
