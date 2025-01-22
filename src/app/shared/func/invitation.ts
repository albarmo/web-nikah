const data = [
  { name: "Alifah Nur", tel: "6281513742067" },
  { name: "Riswanti", tel: "6285697347952" },
  { name: "Shela Vianty", tel: "6287788996343" },
  { name: "Hana Larasati", tel: "62816756755" },
  { name: "Adinda Khoirunnisaa", tel: "628111449990" },
  { name: "Manggar & Suami", tel: "6281390212921" },
  { name: "Dewimas", tel: "6281292914364" },
  { name: "Ka Ilham & Ka Tiara Owner Selaras", tel: "628119344881" },
  { name: "Ka Ilham & Ka Tiara Owner Selaras", tel: "6287822804778" },
  { name: "Rizky Syahputra", tel: "6285718484065" },
];

export function generateInvitationLink() {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const guest = data[i];
    const encodedGuestName = guest.name.replaceAll(" ", "%20");
    const encodedGuestnameQuery = guest.name.replaceAll(" ", "-");
    const encoded = `Bismillahirrahmanirrahim%0AAssalamu%27alaikum%20Warahmatullahi%20Wabarakatuh%0A%20%20%20%20%20%20%0AYth.%20${encodedGuestName}%0ADengan%20mengharap%20ridha%20dan%20rahmat%20Allah%20SWT%2C%20serta%20tanpa%20mengurangi%20rasa%20hormat%20secara%20pribadi%2Cperkenankan%20aku%20Yulia%20Dwi%20Rianjani%2C%20mengundang%20untuk%20menghadiri%20acara%20pernikahan%20%3A%0A%20%20%20%20%20%20%0A%F0%9F%91%B0%F0%9F%A4%B5%3A%20Yulia%20Dwi%20Rianjani%20%F0%9F%92%8D%20Albar%20Moerhamsa%0A%F0%9F%97%93%3A%20Minggu%2C%2002%20Februari%202025%0A%E2%8F%B0%3A%2009.00-12.00%20WIB%0A%F0%9F%93%8D%3A%20Kampung%20Kecil%20Cinere%0A%20%20%20%20%20%20%0AJika%20ada%20waktu%2Csehat%20dan%20kesempatan%20merupakan%20suatu%20kehormatan%20bagi%20aku%20pribadi%2C%20apabila%20${encodedGuestName}%20dapat%20menghadiri%2F%20menyaksikan%20prosesi%20pernikahan%20dan%20berikut%20undangan%20kami%20sertakan%20dibawah%20ini%3A%0A%20%20%20%20%20%20%0Ahttps%3A%2F%2Falbaryulia.site%3Fto%3D${encodedGuestnameQuery}%0A%20%20%20%20%20%20%0AKami%20juga%20mengharapkan%20ucapan%20doa%20baik%20supaya%20terlaksanakan-nya%20acara%20pernikahan%20antara%20kami%0A%20%20%20%20%20%20%0AAtas%20perhatiannya%20kami%20ucapkan%20terimakasih.%0AWaalaikumsalam%20warahmatullahi%20wabarakatuh.`;

    result.push({
      to: guest.name,
      encodedUrl: `https://albaryulia.site?to=${encodedGuestName}`,
      url: `https://api.whatsapp.com/send?phone=${guest.tel}&text=${encoded}`,
    });
  }

  return result;
}

console.log(generateInvitationLink());
