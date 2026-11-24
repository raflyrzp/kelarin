export interface PriceListItem {
  id: string;
  layanan: string;
  harga: string;
  keterangan: string;
  target?: "mahasiswa" | "bisnis" | "semua";
}

export interface PriceListCategory {
  id: string;
  kode: string;
  grup: string;
  nama: string;
  deskripsi?: string;
  catatan?: string;
  items: PriceListItem[];
}

export interface PriceListData {
  judul: string;
  tagline: string;
  deskripsi: string;
  tanggal_acuan: string;
  kategori: PriceListCategory[];
  ketentuan_layanan: string[];
}

export interface BundleItem {
  id: string;
  paket: string;
  isi_paket: string;
  poin_isi: string[];
  harga_normal: string;
  harga_bundling: string;
  hemat: string;
  highlighted?: boolean;
}

export interface BundleGroup {
  id: string;
  nama: string;
  target: string;
  items: BundleItem[];
}

export interface BundlingData {
  judul: string;
  tagline: string;
  grup_paket: BundleGroup[];
  ketentuan_bundling: string[];
}

export interface OrderStep {
  tahap: string;
  nomor: string;
  judul: string;
  yang_terjadi: string;
  penanggung_jawab: string;
}

export interface PaymentScheme {
  nilai_pekerjaan: string;
  skema_pembayaran: string;
}

export interface RightsObligationsPair {
  pembeli: string;
  penjual: string;
}

export interface TeknisOrderData {
  judul: string;
  tagline: string;
  alur_order: OrderStep[];
  informasi_pembeli: string[];
  pembayaran: {
    skema: PaymentScheme[];
    catatan: string;
  };
  revisi_deadline_pembatalan: string[];
  hak_dan_kewajiban: RightsObligationsPair[];
  ketentuan_penting: string[];
}
