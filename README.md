# AI Whop Builder — Landing (Next.js + Tailwind)

This repo contains a minimal Next.js project assembled from your Emergent-generated components.

## ✅ What’s inside
- Next.js 14 (App Router)
- React 18
- TailwindCSS configured
- Components migrated from Emergent (`components/*`)
- Minimal UI primitives (`components/ui/button.js`, `components/ui/card.js`)
- Mock data (`/data/mock.js`)

## 🚀 Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## ☁️ Deploy on Vercel
1. Push this folder to a **GitHub** repo (root must contain `package.json`, `app/`, `components/`, `data/`, `tailwind.config.js`, etc.).  
2. In **Vercel**: `New Project` → `Import Git Repository` → select your repo.  
3. **Root Directory**: `/` (the repo root).  
4. Framework will auto-detect **Next.js** → click **Deploy**.

> You do **not** commit `node_modules`. Vercel installs dependencies automatically from `package.json`.

## 🔗 CTA link (Discord)
Open `components/HeroSection.js` and replace the `alert()` in `handleJoinEarlyAccess` with:
```js
window.location.href = "YOUR_DISCORD_INVITE_LINK";
```

## 🧩 Notes
- If Vercel shows "module not found" for `./ui/card` or `./ui/button`, make sure those files exist under `components/ui/` (they are included here).
- If Vercel can’t detect Next, confirm `package.json` is at the configured root and includes `"next"` in `dependencies`.

## 📄 License
Private for your project.
