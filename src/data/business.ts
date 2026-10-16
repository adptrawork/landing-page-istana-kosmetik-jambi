export const business = {
  name: 'Istana Kosmetik Jambi',
  slug: 'istana-kosmetik-jambi',
  category: 'Pusat Grosir Kosmetik',
  city: 'Kota Jambi',
  rating: 4.7,
  reviewCount: 340,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Istana%20Kosmetik%20Jambi%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Istana Kosmetik Jambi — Grosir & Ecer Terlengkap',
  description: 'Istana Kosmetik Jambi: galeri produk terstruktur, harga grosir & ecer, pesan via WhatsApp.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Paket Brightening Basic",
    "price": "Rp 149.000",
    "badge": "BPOM",
    "stock": "Ready"
  },
  {
    "name": "Paket Acne Care",
    "price": "Rp 169.000",
    "badge": "Original",
    "stock": "Ready"
  },
  {
    "name": "Bundling Serum + Moisturizer",
    "price": "Rp 199.000",
    "badge": "Promo Bundling",
    "stock": "Ready"
  },
  {
    "name": "Sunscreen Daily SPF50",
    "price": "Rp 89.000",
    "badge": "BPOM",
    "stock": "Ready"
  },
  {
    "name": "Lip Tint Best Seller",
    "price": "Rp 45.000",
    "badge": "Original",
    "stock": "Ready"
  },
  {
    "name": "Masker Mingguan",
    "price": "Rp 35.000",
    "badge": "BPOM",
    "stock": "Ready"
  }
];
