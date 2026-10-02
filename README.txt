EAS•C multipage website
=======================
Pages (open index.html first):
  index.html        welcome / Start Learning
  dashboard.html    /dashboard
  module1.html ... module5.html   /module1 ... /module5
      deep links: module1.html#objectives | #content | #activity | #performance
  written-test.html /written-test  (150 items)
  statslab.html     /statslab
  badges.html       /badges
  certificate.html  /certificate
  settings.html     /settings

Shared files: assets/css/*.css, assets/js/*.js (cached by the browser, so every page after the first loads fast).

Hosting: upload the whole folder to Netlify, GitHub Pages or Vercel (vercel.json enables /dashboard-style URLs).
Locally: run `python3 -m http.server` in this folder and open http://localhost:8000
Progress and settings are saved in the browser (localStorage) and shared by all pages on the same site.
