export type Projet = {
  id: string;
  slug: string;
  titre: string;
  description: string;
  categorie: string | null;
  statut: "en_developpement" | "beta" | "lance";
  sortie_prevue: string | null;
  date_sortie: string | null;
  lien: string | null;
  image_couverture: string | null;
  images: string[];
  tags: string[];
  ordre: number;
};

// Clés publiques Supabase (lecture seule, protégées par les règles RLS)
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wacdcvdrxeuitbcrgtba.supabase.co";
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_aOxNFnd_-RnoqMk2tdFeeQ_VJ2BCUG-";

export async function getProjets(): Promise<Projet[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/projets?select=*&publie=eq.true&order=ordre.asc`,
      {
        headers: { apikey: SUPABASE_KEY },
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) return [];
    return (await res.json()) as Projet[];
  } catch {
    return [];
  }
}

export const statutLabel: Record<Projet["statut"], string> = {
  en_developpement: "En développement",
  beta: "Bêta",
  lance: "Lancé",
};
