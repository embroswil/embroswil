import Breadcrumb from "@/components/Common/Breadcrumb";
import ProjetCard from "@/components/Projets/ProjetCard";
import { getProjets } from "@/lib/projets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos projets | Embroswil",
  description:
    "Découvrez les produits développés par Embroswil : 1heMall, Boza, School, Video Generator et Vidéo.",
};

const ProjetsPage = async () => {
  const projets = await getProjets();
  return (
    <>
      <Breadcrumb
        pageName="Nos projets"
        description="Les produits que nous concevons et préparons pour le marché."
      />
      <section className="pb-[100px] pt-[60px]">
        <div className="container">
          {projets.length === 0 ? (
            <p className="text-center text-body-color">
              Les projets arrivent bientôt.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projets.map((projet) => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjetsPage;
