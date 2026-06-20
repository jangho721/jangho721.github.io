# Original Site Content Archive

A human-readable record of everything that was on the old al-folio
(`jangho721.github.io`) site before the rebuild, kept for future reference
(e.g. writing a CV PDF, a longer bio, or restoring a project write-up).
Raw source files are kept alongside this summary in `_pages/`, `_data/`,
and `_projects/`.

## Home (`_pages/about.md`, permalink `/`)

- Name placeholder used in the bio text: "Andrew" (not used anywhere on
  the new site — flagging in case it was unintentional).
- M.S. in AI at Hanyang University, advised by **Dr. Eunok Paek**
  ([lab page](https://bislab.hanyang.ac.kr/index.php?mid=Professor)).
  Research applied ML to bioinformatics/proteomics — reranking and
  rescoring *de novo* sequencing results, novel post-processing methods
  for peptide identification.
- Currently Data Scientist at Ailys, building a Decision Intelligence
  Platform. Previously AI Engineer at TmaxEduAI (personalized learning
  systems).
- Broadly interested in Machine Learning and Software Engineering,
  applying ML across fields to real-world problems.
- Had a red "currently seeking a full-time position as a Data Scientist
  or Machine Learning Engineer" callout — not carried over to the new
  site since it skews more "actively job hunting" than the desired tone.
- Subtitle: "MOVE FAST and BE RESPONSIBLE".
- Location: Seoul, Republic of Korea.

## About (`_pages/me.md`, permalink `/about/`)

More personal/philosophical version of the About page (distinct from
Home above — al-folio had the two split). Emoji-bulleted reflections:

- Motivated by bridging people and AI; believes AI should make people's
  lives better and amplify human capability responsibly.
- Interested in AI reasoning/understanding, human-AI collaboration,
  trustworthy/ethical/responsible AI systems.
- End goal: build AI systems like JARVIS (Iron Man) / TARS
  (Interstellar) — an assistant/partner, not just technology.
- Has worked with engineers/researchers/scientists across domains.
- Outside work: traveling, food, sports, music; draws energy from small
  moments of serendipity and kindness.
- Closing line: hopes to be "a small source of hope" and stay "warm,
  human, and a spring-like presence" in someone's life.

This voice (JARVIS/TARS framing, "spring-like presence") was not reused
verbatim in the new site's About section, which was rewritten to be more
direct/resume-style for a US hiring audience — but it's preserved here in
case a more personal/long-form bio page is ever wanted.

## Publications

- **NovoRank: Refinement for De Novo Peptide Sequencing Based on
  Spectral Clustering and Deep Learning**
  Jangho Seo, Seunghyuk Choi, Eunok Paek — *J. Proteome Res.* 2025, 24,
  2, 903–910.
  - PDF: `assets/pdf/MS_NovoRank_JPR2024.pdf` (still present, used on the
    new site)
  - Code: https://github.com/jangho721/NovoRank
  - DOI/HTML: https://pubs.acs.org/doi/10.1021/acs.jproteome.4c00300
  - Full bibtex (incl. al-folio's default Einstein placeholder entries,
    not real) archived at `_bibliography/papers.bib` snapshot below.

## Projects (full write-ups archived in `_projects/`)

| File | Project | Category | Used on new site? |
|---|---|---|---|
| `NovoRank.md` | NovoRank | professional | Yes |
| `edTech.md` | TmaxEduAI / Personalized Learning at Scale | professional | Yes |
| `cm.md` | Construction Site Hazard Detection | professional | Yes |
| `ctrPrediction.md` | CTR Prediction (Avazu/LightGBM) | personal | Yes (note: file has leftover unrelated Korean text about other companies — ignore that part) |
| `theBox.md` | Social Network Service (backend) | personal | No — frontmatter only, no body content |
| `3_project.md` | JourneyMate (recommender) | fun | No — frontmatter only, no body content |

## CV (`_pages/cv.md` + `_data/cv.yml`)

`_pages/cv.md` was just the Jekyll page shell (pulls in `cv_pdf:
example_pdf.pdf`, which is al-folio's placeholder, not a real file). All
actual CV content lives in `_data/cv.yml` (Education, Publications,
Professional/Research Experience, Talks, Extracurricular Activities,
Licenses/Certifications, Interests, Languages, Honors and Awards — see
that file directly).

There is also a real **`assets/pdf/Thesis.pdf`** (M.S. thesis) sitting in
the repo, not referenced from the old site's `cv.md` and not yet linked
anywhere on the new site. Worth deciding later whether to link it from
About or a future CV page.

## Other things checked and confirmed NOT worth keeping

- `_news/announcement_1-3.md`: real timeline facts (TmaxEduAI join date
  Jan 2023, ASMS poster Mar 2022, Hanyang MS start Sep 2020, NovoRank JPR
  acceptance Dec 2024, joined Ailys Apr 2025) — all already covered by
  `_data/cv.yml`, nothing unique.
- `_news/announcement_4.md`: al-folio's generic lorem-ipsum demo post,
  not real content.
- `_pages/404.md`, `blog.md`, `dropdown.md`, `news.md`, `profiles.md`,
  `repositories.md`, `teaching.md`, `about_einstein.md`: al-folio
  boilerplate/template pages (404 page, blog index, nav dropdown demo,
  lab-members template, etc.) — no personal content, all theme defaults.
- `_data/socials.yml`: real contact handles —
  `github_username: jangho721`, `linkedin_username: jangho-seo`,
  `email: wkdgh08721@gmail.com`. The new site's Contact section LinkedIn
  link was a placeholder (`#`) — fixed to use `jangho-seo` from this file.
- `assets/json/table_data.json`, `_pages/repositories.md`,
  `_data/repositories.yml`, `_data/coauthors.yml`, `_data/venues.yml`:
  al-folio feature scaffolding (GitHub repo embed widget, co-author
  list, venue abbreviations) — empty/default, no real content.
