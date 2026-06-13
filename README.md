# Beside

Projet Next.js (App Router, TypeScript).

## Stack

- **Next.js** — App Router avec dossier `src/`
- **Supabase** — `@supabase/supabase-js`
- **Hugging Face** — `@huggingface/inference`

## Démarrage

```bash
npm install
npm run dev
```

## Structure

```
src/
├── app/           # Routes App Router
├── assets/        # Images, polices, etc.
├── components/    # Composants UI par section
├── context/       # Providers React
├── lib/           # Clients (Supabase, Hugging Face) et utilitaires
└── services/      # Logique métier (appels API, Supabase, etc.)
```

Les dossiers de routes et de composants sont en place ; le contenu sera ajouté progressivement.
