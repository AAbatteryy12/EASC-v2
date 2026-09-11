# EAS•C — Supabase Edition

## Changes
- All 6 modules are unlocked from the start.
- Modules 1–5 retain their lessons and interactive activities and now show 5 guide questions for each activity.
- Module 6 is assessment-only: exactly 30 multiple-choice questions.
- Courseware text is enlarged for readability.
- Supabase Auth is the sign-in system (email + password).
- Learner progress is stored in Supabase as the main database, per authenticated user.
- Local browser storage remains as a fallback/cache for the existing APK/WebView behavior.

## Setup
1. Run `supabase.sql` in your Supabase project's SQL Editor.
2. Open `config.js` and replace the placeholders with your Supabase Project URL and publishable/anon key.
3. In Supabase Dashboard, go to Authentication → Providers → Email and disable **Confirm email**. This is required for no-email-verification sign-up/sign-in.
4. Upload `index(3).html` and `config.js` together to GitHub Pages (or another static host).
5. The HTML loads Supabase JS from jsDelivr, so internet access is required.

## Important
- Do not put a Supabase service-role key in `config.js`. Only the browser-safe publishable/anon key belongs there.
- Supabase RLS ensures a learner can read/write only their own `learner_progress` row.
- The 30-item assessment uses an 80% passing threshold (24/30).
