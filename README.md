# Istana Kosmetik Jambi — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## SUMBER GAMBAR & STATUS SCRAPING (2026-10-16)

Prioritas: 1) situs milik target, 2) situs resmi brand disalin lokal ke public/images (<=100KB), 3) picsum fallback HANYA slot terblokir.

### Gambar real per produk

- istana-p1.jpg/hero <- facetology.id Ceramoist B5 (varian Oat tidak ada di katalog; caption jujur)
- istana-p2.jpg <- glad2glow.com Blueberry Ceramide Moisturizer
- istana-p8.jpg <- implora.co.id Urban Lip Cream Matte cover
- istana-p3.jpg (800x600, 86KB) <- Wikimedia Commons "Clarins Products.jpg" oleh John9474 (CC0) — ilustrasi generik display skincare untuk Eiem Beauty
- istana-p4.jpg (800x533, 68KB) <- Wikimedia Commons "Batons Make B @ SPFW" oleh O Boticário SPFW (CC BY 2.0) — ilustrasi generik lipstik untuk Madame Gie
- istana-p5.jpg (800x683, 89KB) <- Wikimedia Commons "Aurora Shampoo, Conditioner and Body Wash" oleh TaurusEmerald (CC BY-SA 4.0) — ilustrasi generik body wash untuk Lavojoy
- istana-p6.jpg (800x771, 92KB) <- Wikimedia Commons "Deosprays" oleh Ralf Roletschek (CC BY-SA 1.0 fi) — ilustrasi generik deodorant spray untuk Scora
- istana-p7.jpg (800x664, 89KB) <- Wikimedia Commons "After-Sun-Lotion" oleh Tamina212 (CC BY-SA 4.0) — ilustrasi generik botol losion untuk Wardah Mist
- Slot picsum: NOL (semua sudah lokal; foto brand official tetap prioritas bila tersedia)

### URL terblokir / tidak bisa di-scrape

- desty.page/istanacosmetics -> fetch kosong (JS-only/proteksi)
- shopee.co.id/4 toko -> cangkang JS + anti-bot, tanpa data produk
- instagram.com 4 akun -> login-walled
- wardahbeauty.com produk -> 404 custom, katalog via JS tanpa API publik
- scarlettwhitening.com -> Next.js JS-only
- youmakeups.com, pixycosmetics.com, lavojoy.id -> DNS tidak resolve
- omgbeauty.com -> respons kosong
- vivacosmetics.com -> me-serve konten implora (parked/shared?) -> tidak dipakai
- azarine.id -> Store API products kosong
- makeoverforall.com -> timeout berulang
- tiktok.com 3 akun -> butuh JS/login; hanya tautan profil
- emina/implora thumbs -> tanpa alt varian; dipakai generik + caption jujur
- facetology.id varian Oat -> tidak ada di katalog API
