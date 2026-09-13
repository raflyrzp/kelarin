export const getWhatsAppLink = (
  type: 'bundle' | 'tier' | 'service' | 'general',
  name: string,
  price?: number | string
) => {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || process.env.phone_number || "";
  const formattedPrice = price
    ? typeof price === 'number'
      ? `Rp ${price.toLocaleString('id-ID')}`
      : price
    : '';
  let text = '';

  if (type === 'bundle') {
    text = `Halo Kelar.in, saya mau order paket *${name}* (${formattedPrice}). Saya ingin konsultasi sekaligus diskusi jika ada request penyesuaian fitur tambahan atau teknologi pilihan.`;
  } else if (type === 'tier') {
    text = `Halo Kelar.in, saya tertarik dengan layanan tingkat *${name}* (Mulai dari: ${formattedPrice}). Boleh diskusi lebih lanjut untuk kebutuhan sistem saya?`;
  } else if (type === 'service') {
    text = `Halo Kelar.in, saya butuh penanganan untuk jasa *${name}*${formattedPrice ? ` (${formattedPrice})` : ''}. Bisa bantu diskusikan alur dan estimasinya?`;
  } else {
    text = `Halo Kelar.in, saya mau konsultasi kebutuhan tugas / proyek saya (${name}). Bisa bantu berikan estimasi dan alur kerjanya?`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
