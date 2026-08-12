# Ayesha Ahmed — Portfolio (React)

A React + Vite rebuild of the editorial-style portfolio, with a contact form that
sends real emails to your inbox via [EmailJS](https://www.emailjs.com) — no backend
server required.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Connect the contact form to your email (EmailJS)

EmailJS lets a static React site send email straight from the browser, using your
own Gmail (free tier: 200 emails/month).

1. Go to https://dashboard.emailjs.com and sign up (free).
2. **Add an email service**: Email Services → Add New Service → choose Gmail →
   connect `ayeshaahmed1573@gmail.com`. This gives you a **Service ID**
   (e.g. `service_abc1234`).
3. **Create an email template**: Email Templates → Create New Template. Set it up
   with these variables (they match what the form sends):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`

   Example template body:
   ```
   New portfolio message from {{from_name}} ({{from_email}})

   {{message}}
   ```
   Save it — you'll get a **Template ID** (e.g. `template_xyz789`).
4. **Get your Public Key**: Account → General → API Keys → copy the **Public Key**.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart `npm run dev`. Submit the form — you should get an email at
   `ayeshaahmed1573@gmail.com` within a few seconds.

**Note:** Vite only exposes env vars prefixed with `VITE_` to the browser, and
`.env` is already gitignored so your keys won't get committed. The EmailJS
public key is safe to ship in a static site — it's designed for client-side use,
and you can restrict which domains can use it from the EmailJS dashboard
(Account → Security → Allowed origins) once you deploy.

## 3. Add your resume

Drop your resume PDF into the `public/` folder as `resume.pdf` — the "Resume ↓"
link in the Contact section already points to `/resume.pdf`.

## 4. Add a real photo

Replace the "A." monogram blocks in `Hero.jsx` and `About.jsx` with an `<img>`
tag pointing to a photo in `public/`.

## 5. Deploy to Vercel

```bash
npm run build
```

Then either drag the `dist/` folder into Vercel, or connect this repo to Vercel
and set the same three `VITE_EMAILJS_*` environment variables in
**Project Settings → Environment Variables** on Vercel (the `.env` file itself
isn't deployed).

## Project structure

```
src/
  components/
    Nav.jsx        — sticky nav, swaps style on scroll past hero
    Hero.jsx        — oversized headline + ghost text + photo block
    About.jsx        — bio + contact card
    Education.jsx    — education timeline + skills
    Experience.jsx   — ZetaCorp / CODSOFT timeline (amber section)
    Projects.jsx      — ATS, Inventory System, CyberHub, Laravel Job Board
    Languages.jsx     — languages + hobbies
    Contact.jsx        — form wired to EmailJS
    Reveal.jsx          — scroll-reveal animation wrapper
  hooks/
    useReveal.js         — IntersectionObserver hook powering Reveal
  index.css               — all design tokens & styles
  App.jsx                  — assembles the page
```
