export const getWhatsAppLink = (type: 'bundle' | 'tier' | 'service', name: string, price?: number) => {
  const phone = "62895337227111"; // Target operational phone number
  const formattedPrice = price ? `Rp ${price.toLocaleString('id-ID')}` : '';
  let text = '';

  if (type === 'bundle') {
    text = `Halo Kelar.in, saya mau order paket *${name}* (${formattedPrice}). Saya ingin konsultasi sekaligus diskusi jika ada request penyesuaian fitur tambahan atau teknologi pilihan.`;
  } else if (type === 'tier') {
    text = `Halo Kelar.in, saya tertarik dengan layanan tingkat *${name}* (Mulai dari: ${formattedPrice}). Boleh diskusi lebih lanjut untuk kebutuhan sistem saya?`;
  } else {
    text = `Halo Kelar.in, saya butuh penanganan untuk jasa *${name}*. Bisa bantu diskusikan alur dan estimasinya?`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
