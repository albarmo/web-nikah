import Image from "next/image";
import CountdonwTimer from "../shared/ui/countdown.timer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Heading Title */}
      <div id='container' className="paper w-screen h-screen flex flex-col justify-around items-center p-5">
        <section className="font-aurore text-center space-y-5 w-full">
          <span className="text-xl">the wedding of</span>
          <h1 className="text-6xl">Albar <br />& Yulia</h1>
          <span className="text-xl ml-24">02.02.2024</span>
        </section>
        <section className="text-center">
          <p >Kepada Yth. Ibu/Bapak/Saudara/i</p>
          <p className="text-xl font-semibold">Nama Tamu Undangan</p>
        </section>
        <CountdonwTimer />
      </div>
      <div id='container' className="vertical-paper shadow-xl overflow-hidden">
        {/* Surah Ar Rum:21 */}
        <section className="w-screen h-screen flex flex-col justify-center items-center p-5 space-y-10">
          <Image src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-16 object-contain" />
          <section className="text-center">
            <p className="text-xl font-semibold">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
            </p>
          </section>
          <span>
            Surah Ar Rum : 21
          </span>
          <svg width="375" height="125" viewBox="0 0 375 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M374.146 91.2006C375.411 94.9587 375.455 96.6082 373.015 98.0406C360.948 105.125 348.651 111.899 337.114 119.778C329.947 124.673 324.73 124.034 317.793 119.328C306.247 111.495 293.863 104.898 281.045 97.3144C265.845 106.334 250.258 115.586 234.394 125C225.944 120.075 217.86 115.457 209.873 110.677C203.471 106.848 197.149 102.88 190.872 98.8491C188.61 97.3968 186.695 97.3955 184.407 98.8217C173.331 105.728 162.211 112.565 151.048 119.329C148.05 121.145 144.844 122.613 141.324 124.456C124.771 117.319 110.57 105.553 93.9648 97.4018C85.9885 102.167 78.0187 106.934 70.0412 111.692C63.6318 115.514 57.1748 119.26 50.8166 123.167C48.2725 124.729 45.9965 124.451 43.6132 122.994C30.6822 115.083 17.73 107.205 4.81643 99.2646C3.08129 98.1978 1.5257 96.8353 0 95.6949C1.04705 92.0927 2.68613 91.5874 5.35111 93.2219C13.2974 98.098 21.3049 102.876 29.2787 107.71C35.4437 111.449 41.5926 115.215 47.8163 119.011C60.063 111.42 71.6727 103.583 83.8858 96.8415C95.1403 90.6291 92.9317 89.5948 104.564 96.8553C116.433 104.264 128.514 111.336 141.101 118.916C156.375 109.643 171.869 100.238 187.627 90.6703C203.047 99.9708 218.576 109.339 234.382 118.872C249.975 109.481 265.539 100.106 281.205 90.6703C296.601 100.038 311.728 109.243 327.319 118.729C343.093 110.665 357.63 99.6964 374.146 91.2006Z" fill="#D8D8D8" fillOpacity="0.90" />
            <path d="M327.682 79.5133C323.948 77.4021 319.866 75.2198 315.911 72.8292C305.738 66.678 295.629 60.4207 285.477 54.232C282.493 52.4128 279.929 52.1209 276.495 54.3182C264.516 61.9816 252.205 69.1223 239.991 76.4139C238.196 77.4844 236.245 78.2942 234.096 79.3585C227.089 75.3258 219.984 71.3369 212.979 67.1784C205.562 62.7751 198.191 58.2908 190.903 53.678C188.305 52.0335 186.378 52.5065 183.873 54.0336C170.532 62.16 157.058 70.0718 143.624 78.0422C142.833 78.5101 141.965 78.8457 140.803 79.4009C132.808 74.7682 124.726 70.1404 116.7 65.4153C110.676 61.868 104.656 58.3058 98.7701 54.539C95.4096 52.3879 92.5216 52.4216 89.1025 54.5639C76.6601 62.3646 64.0891 69.9595 51.5321 77.5756C50.1709 78.4016 48.5868 78.8594 47.0512 79.512C32.7017 70.9165 18.5054 62.437 4.34789 53.8926C2.97424 53.063 1.5433 52.0186 0.711907 50.7097C0.154704 49.8301 0.605853 48.3079 0.605853 45.9197C17.8422 53.9164 31.8378 65.4028 47.981 73.5679C63.4698 64.1476 78.9597 54.7262 94.4846 45.2834C110.106 54.7935 125.415 64.1151 141.235 73.7463C156.539 64.3472 171.986 54.8584 187.714 45.1973C203.145 54.6375 218.435 63.9929 234.374 73.745C249.557 64.4683 265.026 55.018 281.067 45.2173C296.178 54.4853 311.458 63.8557 327.313 73.5804C342.94 65.3866 357.74 54.8946 373.729 46.0295C375.012 50.7322 374.713 51.6106 371.533 53.6344C367.798 56.0124 364.078 58.4194 360.258 60.6528C349.6 66.8826 338.895 73.0289 327.682 79.5133Z" fill="#D8D8D8" fillOpacity="0.90" />
            <path d="M141.092 28.3444C156.613 18.8979 171.937 9.57248 187.66 0.00381724C203.184 9.47394 218.669 18.9204 234.355 28.4904C249.734 19.0839 265.034 9.72471 280.932 0C296.312 9.31416 311.848 18.722 327.624 28.277C335.53 23.5844 343.248 18.8405 351.121 14.3749C358.708 10.0704 365.423 4.11623 374.025 1.25525C376.303 5.48754 373.562 7.09074 371.339 8.52946C367.231 11.1871 362.92 13.5278 358.7 16.0107C349.651 21.3385 340.613 26.6862 331.551 31.9914C330.157 32.8075 328.663 33.4513 327.338 34.1126C313.061 25.5782 299.058 17.201 285.047 8.83757C282.229 7.15562 279.829 7.06835 276.67 9.01974C262.78 17.6003 248.63 25.7603 234.258 34.2586C220.524 25.985 206.744 17.7213 193.012 9.38284C189.505 7.25425 186.737 7.03591 182.817 9.53135C170.033 17.6727 156.808 25.1228 143.742 32.8212C142.948 33.2891 142.067 33.6085 141.035 34.0852C134.007 30.0663 126.886 26.101 119.873 21.9524C112.449 17.5591 105.052 13.1098 97.8016 8.43839C94.8313 6.52432 92.4132 7.55865 89.9688 8.97863C85.7358 11.4391 81.6446 14.1416 77.4352 16.6459C67.8074 22.374 58.1448 28.0412 48.0208 34.014C46.1461 33.1119 43.764 32.1736 41.5889 30.886C29.341 23.6292 17.1205 16.3264 4.95233 8.93613C3.21224 7.87942 1.69021 6.37337 0.326559 4.84365C-0.0261837 4.44689 0.41256 3.06317 0.845115 2.34953C1.10188 1.92398 2.18267 1.59338 2.67254 1.78552C4.84015 2.63395 7.05262 3.48491 9.02455 4.69896C19.5561 11.1783 30.0104 17.785 40.5145 24.3068C42.6959 25.6606 44.9807 26.8458 47.5248 28.2832C54.4976 24.1122 61.5139 19.9548 68.4904 15.7312C75.6726 11.3842 82.89 7.08832 89.9451 2.54159C93.3554 0.344376 96.034 0.703749 99.417 2.86105C112.393 11.1384 125.576 19.0913 138.691 27.1491C139.468 27.6257 140.327 27.9664 141.092 28.3444Z" fill="#D8D8D8" fillOpacity="0.90" />
          </svg>
        </section>

        {/*  Brides */}
        <section className="relative w-screen h-screen flex flex-col justify-around items-center p-5">
          {/* Man */}
          <article className="flex flex-col justify-center items-center">
            <Image src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-32 rounded-full aspect-square bg-orange-50 object-contain" />
            <section className="text-center mt-5">
              <h1 className="text-2xl font-semibold">
                Albar Moerhamsa
              </h1>
            </section>
            <span className="text-center">
              Putra dari <br /> Asi Moeranto dan Hamidah
            </span>
          </article>
          <Image className="absolute top-20 right-0 w-min object-contain" src={'/ilustration/bride-1.svg'} alt="Love Story" width={100} height={100} />
          {/* Woman */}
          <article className="flex flex-col justify-center items-center">
            <Image src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-32 rounded-full aspect-square bg-orange-50 object-contain" />
            <section className="text-center mt-5">
              <h1 className="text-2xl font-semibold">
                Yulia Dwi Rianjani
              </h1>
            </section>
            <span className="text-center">
              Putri kedua dari <br /> Alm Jajang Joni dan Rinawaty
            </span>
          </article>
          <Image className="absolute bottom-0 left-2 right-0 w-min object-contain" src={'/ilustration/bride-2.svg'} alt="Love Story" width={100} height={100} />
        </section>

        {/*  Love Story */}
        <section className="w-screen h-max flex flex-col justify-around items-center py-10 px-5">
          <h1 className="text-4xl font-semibold py-4">
            <span className="font-aurore">Love</span> Story
          </h1>
          <Image src={'/ilustration/love-story.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain" />
        </section>

        {/*  Date and Location */}
        <section className="relative h-max">
          <Image src={'/ilustration/couple-picture-bg.png'} alt="Love Story" width={600} height={600} className="w-full object-contain" />
          <section className="absolute space-y-2.5 top-0 text-center p-5 py-10">
            <h1 className="text-3xl font-semibold py-4">
              <span className="font-aurore">Save</span> The Date
            </h1>
            <h2 className="text-xl">
              Sabtu,<span className="text-4xl font-semibold">02</span>
              <br />
              Februari 2025
            </h2>
            <section className="text-lg">
              <p> Akad     : 10.00 WIB - 11.00 WIB </p>
              <p> Resepsi  : 11.00 WIB - 13.00 WIB</p>
            </section>
            <p className="text-xl font-semibold">
              Kampung Kecil Cinere
            </p>
            <p >Jl. Telaga Warna, RT.07/RW.05, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 16514</p>
          </section>
          <button className="absolute bottom-5 left-5 w-11/12 bg-white rounded-full p-2.5">Google Map</button>
        </section>

        {/*  Moment Bahagia */}
        <div className="relative h-screen space-y-5">
          <section className="absolute top-0 right-0 bg-[#FF5E00]/70 size-32 rounded-full"></section>
          <section className="h-max z-0 flex p-5">
            <section >
              <h1 className="text-4xl font-semibold py-4 text-left leading-6">
                <span className="font-aurore">Momen</span><br /> Bahagia.
              </h1>
              <p>Poto poto potato...</p>
            </section>
            <Image className="-z-0 right-0 w-full object-contain" src={'/ilustration/couple-moment.svg'} alt="Love Story" width={600} height={600} />
          </section>
          <div className="absolute top-40 grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/*  Gift*/}
        <div className="min-h-screen space-y-5 p-y-5 p-5">
          <section>
            <h1 className="text-4xl font-semibold py-4 text-left leading-6">
              <span className="font-aurore text-3xl">Wedding</span><br /> Gift.
            </h1>
            <p>Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini</p>
          </section>
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Bank - Yulia */}
            <article className="relative w-full h-52 bank-card-1 shadow-md rounded-lg p-5">
              <section className="absolute bottom-5 left-5 flex justify-between w-11/12 items-end space-x-5">
                <section className="text-md">
                  <p>Nomor Rekening</p>
                  <h1 className="text-2xl font-semibold font-sans">0661304005</h1>
                  <h2 className="font-aurore text-xl mt-2">Yulia Dwi Rianjani</h2>
                </section>
                <button className="p-1 px-6 bg-black/80 h-min rounded-md text-white font-semibold text-md">Salin</button>
              </section>
              <Image className="absolute top-0 right-2" src={'/logo-bank-bca.svg'} alt="Bank BCA" width={100} height={100} />
            </article>

            {/* Bank - Albar */}
            <article className="relative w-full h-52 bank-card-1 shadow-md rounded-lg p-5">
              <section className="absolute bottom-5 left-5 flex justify-between w-11/12 items-end space-x-5">
                <section className="text-md">
                  <p>Nomor Rekening</p>
                  <h1 className="text-2xl font-semibold font-sans">050101023340502</h1>
                  <h2 className="font-aurore text-xl mt-2">Albar Moerhamsa</h2>
                </section>
                <button className="p-1 px-6 bg-black/80 h-min rounded-md text-white font-semibold text-md">Salin</button>
              </section>
              <Image className="absolute top-5 right-5" src={'/logo-bank-bri.svg'} alt="Bank BRI" width={60} height={60} />
            </article>

            {/* Bank - Pakeet */}
            <article className="relative w-full h-60 shadow-md rounded-lg p-5 bg-white/30">
              <h1 className="text-3xl font-semibold py-4 text-left leading-3">
                <span className="font-aurore text-2xl">Misi</span><br /> Pakeet....
              </h1>
              <p className="w-2/3 z-10 mt-2">Jalan H Mandor 12A Cilandak Barat, Jakarta Selatan 12430</p>
              <p className="font-aurore mt-3">Albar & Yulia</p>
              <Image className="absolute bottom-0 right-0 z-0" src={'/ilustration/man-read-map.svg'} alt="Bank BRI" width={150} height={150} />
            </article>
          </section>
        </div>

        {/*  Moment Bahagia */}
        <div className="relative flex flex-col items-center h-96 overflow-hidden space-y-5">
          <section className="z-0 flex p-5">
            <section className="text-center space-y-5">
              <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.</p>
              <p>Sampai Jumpa,</p>
              <h1 className="text-3xl font-aurore">
                Albar & Yulia
              </h1>
            </section>
          </section>
          <Image className="w-min object-contain" src={'/ilustration/couple-dancing.svg'} alt="Love Story" width={100} height={100} />
        </div>
      </div>
      <footer className="w-full bg-[#2F2F2F] z-50 text-center text-white p-2.5">
        <p className="text-sm">with ❤ <br /> ini kita <span className="font-aurore text-xl">buat sendiri</span> @2024</p>
      </footer>
    </main>
  );
}
