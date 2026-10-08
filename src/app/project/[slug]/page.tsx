import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjet, statutLabel } from "@/lib/projets";
import { statutCouleur } from "@/components/Projets/ProjetCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = await getProjet(slug);
  if (!projet) return { title: "Projet introuvable | Embroswil" };
  return {
    title: `${projet.titre} | Embroswil`,
    description: projet.description,
  };
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params;
  const projet = await getProjet(slug);
  if (!projet) notFound();

  const galerie = (projet.images || []).filter(Boolean);

  return (
    <section className="bg-white pb-16 pt-[110px] dark:bg-gray-dark md:pt-[140px]">
      <div className="container">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/"
            className="mb-5 inline-block text-sm font-medium text-body-color hover:text-primary"
          >
            ← Tous les projets
          </Link>

          <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-light dark:bg-dark">
            {projet.image_couverture ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={projet.image_couverture}
                alt={projet.titre}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/80 to-black">
                <span className="text-3xl font-bold text-white">
                  {projet.titre}
                </span>
              </div>
            )}
          </div>

          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              {projet.titre}
            </h1>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statutCouleur[projet.statut]}`}
            >
              {statutLabel[projet.statut]}
            </span>
          </div>
          {projet.categorie && (
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">
              {projet.categorie}
            </p>
          )}
          <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg">
            {projet.description}
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            {projet.lien && (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-6 py-3 text-center text-base font-semibold text-white hover:bg-primary/90"
              >
                Visiter le site
              </a>
            )}
            {projet.lien_telechargement && (
              <a
                href={projet.lien_telechargement}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-6 py-3 text-center text-base font-semibold text-white hover:bg-black/90 dark:bg-white/10"
              >
                Télécharger l&apos;application
              </a>
            )}
            {!projet.lien && !projet.lien_telechargement && (
              <span className="rounded-md bg-gray-light px-6 py-3 text-center text-base font-semibold text-body-color dark:bg-dark">
                Bientôt disponible
              </span>
            )}
            <Link
              href="/contact"
              className="rounded-md border border-body-color/30 px-6 py-3 text-center text-base font-semibold text-black hover:border-primary hover:text-primary dark:text-white"
            >
              Être informé du lancement
            </Link>
          </div>

          {galerie.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                Aperçu
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {galerie.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={projet.titre}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
