export const business = {
  name: 'Istana Cosmetics Jambi',
  slug: 'istana-kosmetik-jambi',
  category: 'Grosir & Ecer Kosmetik',
  city: 'Kota Jambi',
  rating: 4.7,
  reviewCount: 340,
  phone: '62895321971081',
  phoneDisplay: '0895-3219-71081 (Admin Online)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Istana+Cosmetics+Jl+Kapt+A+Bakaruddin+Jambi',
  mapsQuery: 'Istana Cosmetics Jl Kapt A Bakaruddin Jambi',
  address: 'Jl Kapt A Bakaruddin No.17, Kota Jambi (bukan cabang Pekanbaru)',
  addressStatus: 'Terverifikasi',
  hours: 'Setiap hari 08.00–22.00',
  hoursStatus: 'Terverifikasi',
  instagram: 'https://www.instagram.com/istana.cosmetics',
  instagramLabel: '@istana.cosmetics • 404K pengikut',
  title: 'Istana Cosmetics Jambi — Grosir & Ecer Kapt Bakaruddin',
  description: 'Istana Cosmetics Jl Kapt A Bakaruddin No.17 Jambi: pusat grosir & ecer kosmetik original 404rb followers. Buka tiap hari, chat admin online.',
  canonicalPath: '/',
  ogImage: '/images/istana-hero.webp',
};

export const socials: Array<{ label: string; url: string; note: string }> = [
  { label: 'Instagram', url: 'https://www.instagram.com/istana.cosmetics', note: '@istana.cosmetics • 404K — Terverifikasi' },
  { label: 'Shopee', url: 'https://shopee.co.id/istana.cosmetics', note: 'istana.cosmetics — Terverifikasi' },
  { label: 'Telepon Pusat', url: 'tel:07618364069', note: '0761-8364069 — Terverifikasi' },
];

export const storeNotes: string[] = [
  'WA 0895-3219-71081 khusus admin online & konfirmasi — Terverifikasi',
  'Layanan: grosir & ecer — Terverifikasi',
  'Harga di web ini estimasi, konfirmasi via WA toko.',
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Facetology Triple Care Series', price: 'Rp 90–110rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p1.webp', alt: 'Facetology Triple Care Ceramoist B5 — foto resmi brand (varian Oat konfirmasi via WA)', w: 800, h: 800, source: 'Sumber: facetology.id (official)' },
  { name: 'Glad2Glow Blueberry Series', price: 'Rp 55–70rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p2.webp', alt: 'Glad2Glow Blueberry Ceramide Moisturizer — foto resmi brand', w: 800, h: 800, source: 'Sumber: glad2glow.com (official)' },
  { name: 'Eiem Beauty Series', price: 'Rp 40–80rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/istana-p3.webp', alt: 'Ilustrasi generik display produk skincare di konter kecantikan — bukan foto produk Eiem, konfirmasi varian via WA', w: 800, h: 600, source: 'Sumber: Wikimedia Commons — Clarins Products.webp oleh John9474 (CC0)' },
  { name: 'Madame Gie Series', price: 'Rp 20–30rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/istana-p4.webp', alt: 'Ilustrasi generik deretan lipstik makeup — bukan foto produk Madame Gie, konfirmasi varian via WA', w: 800, h: 533, source: 'Sumber: Wikimedia Commons — Batons Make B SPFW oleh O Boticário SPFW (CC BY 2.0)' },
  { name: 'Lavojoy Series', price: 'Rp 50–85rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/istana-p5.webp', alt: 'Ilustrasi generik dispenser body wash, sampo dan kondisioner — bukan foto produk Lavojoy, konfirmasi varian via WA', w: 800, h: 683, source: 'Sumber: Wikimedia Commons — Aurora Shampoo, Conditioner and Body Wash oleh TaurusEmerald (CC BY-SA 4.0)' },
  { name: 'Scora Series', price: 'Rp 45–65rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/istana-p6.webp', alt: 'Ilustrasi generik botol deodorant spray berbagai merek — bukan foto produk Scora, konfirmasi varian via WA', w: 800, h: 771, source: 'Sumber: Wikimedia Commons — Deosprays oleh Ralf Roletschek (CC BY-SA 1.0 fi)' },
  { name: 'Wardah Mist Series', price: 'Rp 30–45rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/istana-p7.webp', alt: 'Ilustrasi generik botol losion perawatan kulit — bukan foto produk Wardah, konfirmasi varian via WA', w: 800, h: 664, source: 'Sumber: Wikimedia Commons — After-Sun-Lotion oleh Tamina212 (CC BY-SA 4.0)' },
  { name: 'Implora Lip Series', price: 'Rp 20–28rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p8.webp', alt: 'Implora Urban Lip Cream Matte — foto resmi brand', w: 636, h: 573, source: 'Sumber: implora.co.id (official)' },
];

export const promos = [
  { title: 'Harga Grosir Lusinan', desc: 'Beli banyak untuk dijual lagi? Minta pricelist grosir ke admin online.', status: 'Terverifikasi — melayani grosir.' },
  { title: 'Paket Ecer Hemat', desc: 'Bundling 3 produk brand lokal favorit lebih hemat.', status: 'Estimasi — harga final via WA.' },
  { title: 'Konfirmasi Stok Online', desc: 'Chat admin online sebelum datang agar tidak kehabisan.', status: 'Terverifikasi — admin online aktif.' },
];
