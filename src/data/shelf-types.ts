// Jenis/kategori tampil per baris rak. Diturunkan HANYA dari teks alt resmi di
// src/data/business.ts (mis. "lipstik makeup", "body wash", "deodorant spray"),
// bukan data produk baru. Tidak ada nama brand/harga yang diubah atau dikarang.
const map: Record<string, string> = {
  'Facetology Triple Care Series': 'Skincare',
  'Glad2Glow Blueberry Series': 'Skincare',
  'Eiem Beauty Series': 'Skincare',
  'Madame Gie Series': 'Makeup bibir',
  'Lavojoy Series': 'Body care',
  'Scora Series': 'Body care',
  'Wardah Mist Series': 'Skincare',
  'Implora Lip Series': 'Lip makeup',
};

export const shelfType = (name: string): string => map[name] ?? 'Kosmetik';
