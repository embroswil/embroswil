// Adresse officielle du site, determinee automatiquement :
// 1. NEXT_PUBLIC_SITE_URL si elle est definie sur Vercel ;
// 2. sinon le domaine de production fourni par Vercel (l'adresse vercel.app
//    aujourd'hui, puis ton propre domaine des qu'il sera branche) ;
// 3. sinon, en local, http://localhost:3000.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
