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
  ogImage: '/images/istana-hero.jpg',
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
  { name: 'Facetology Triple Care Series', price: 'Rp 90–110rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p1.jpg', alt: 'Facetology Triple Care Ceramoist B5 — foto resmi brand (varian Oat konfirmasi via WA)', w: 800, h: 800, source: 'Sumber: facetology.id (official)' },
  { name: 'Glad2Glow Blueberry Series', price: 'Rp 55–70rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p2.jpg', alt: 'Glad2Glow Blueberry Ceramide Moisturizer — foto resmi brand', w: 800, h: 800, source: 'Sumber: glad2glow.com (official)' },
  { name: 'Eiem Beauty Series', price: 'Rp 40–80rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/istana-3/800/600', alt: 'Ilustrasi placeholder Eiem Beauty — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Madame Gie Series', price: 'Rp 20–30rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/istana-4/800/600', alt: 'Ilustrasi placeholder Madame Gie — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Lavojoy Series', price: 'Rp 50–85rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/istana-5/800/600', alt: 'Ilustrasi placeholder Lavojoy — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Scora Series', price: 'Rp 45–65rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/istana-6/800/600', alt: 'Ilustrasi placeholder Scora — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Wardah Mist Series', price: 'Rp 30–45rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/istana-7/800/600', alt: 'Ilustrasi placeholder Wardah face mist — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Implora Lip Series', price: 'Rp 20–28rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/istana-p8.jpg', alt: 'Implora Urban Lip Cream Matte — foto resmi brand', w: 636, h: 573, source: 'Sumber: implora.co.id (official)' },
];

export const promos = [
  { title: 'Harga Grosir Lusinan', desc: 'Beli banyak untuk dijual lagi? Minta pricelist grosir ke admin online.', status: 'Terverifikasi — melayani grosir.' },
  { title: 'Paket Ecer Hemat', desc: 'Bundling 3 produk brand lokal favorit lebih hemat.', status: 'Estimasi — harga final via WA.' },
  { title: 'Konfirmasi Stok Online', desc: 'Chat admin online sebelum datang agar tidak kehabisan.', status: 'Terverifikasi — admin online aktif.' },
];
