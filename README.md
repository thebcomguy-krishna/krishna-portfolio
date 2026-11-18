# Krishna Agarwal — Portfolio

Live Site:

https://krishna-portfolio1-chi.vercel.app/


A dark editorial, responsive portfolio built with Next.js App Router, TypeScript, custom CSS, Lucide icons and Framer Motion dependency reserved for future enhancements. It is configured for static export and can be hosted on Vercel or any static host.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build static site

```bash
npm run build
```

The exported site is generated in `out/`.

## Update images without changing code

Replace files in `public/images/` while keeping the same filenames:

- `profile.jpg` — current homepage portrait (already supplied)
- `argus.jpg` — optional Argus image
- `saturn-labs.jpg` — optional Saturn Labs image
- `shyam-bazaar.jpg` — optional Shyam Bazaar image
- `college-stall.jpg` — optional college stall image
- `toastmasters-01.jpg`, `toastmasters-02.jpg` — Toastmasters gallery photos
- `sih-winner.jpg` — Smart India Hackathon winning photo
- `personal-01.jpg` — optional personal photo

Project artwork and the two achievement-photo blocks are currently designed placeholders, so there are no broken-image boxes. The supplied `profile.jpg` is used in the hero. To add real photos to the other sections later, update the corresponding project/achievement component to reference the filenames above; the folder and names are prepared for that handoff.

## Resume

The current resume is at `public/documents/krishna-agarwal-resume.pdf`. Replace it with an updated PDF using the same filename when needed.

## Content notes

The five project pages are written from the information provided in the planning conversation. Please verify all dates, role labels and descriptions before publishing. In particular, Argus dates/role and Saturn Labs role wording should be confirmed against the final resume. Smart India Hackathon is described only as an internal hackathon win organized by Mount Carmel University; the project idea is intentionally omitted.

## Before public launch

- Replace `example.com` in `app/layout.tsx` with the final domain.
- Confirm the public LinkedIn URL and contact details.
- Add real Toastmasters and hackathon photographs when ready.
- Review the downloadable resume for current accuracy.
- Add analytics only if desired.
