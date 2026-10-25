// src/app/api/garder-actif/route.ts
// Appelee chaque jour par Vercel (voir vercel.json) : une petite lecture de la
// base Supabase pour qu'elle ne soit pas mise en pause apres 7 jours sans
// activite (offre gratuite). Sinon, la liste des projets du site devient vide.
import { getProjets } from "@/lib/projets";

export const dynamic = "force-dynamic";

export async function GET() {
  const projets = await getProjets(true);
  return Response.json({ ok: true, projets: projets.length, date: new Date().toISOString() });
}
