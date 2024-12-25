import Image from "next/image"

export default function Home() {
  return (
    <div id='container' className="paper w-screen h-screen flex flex-col justify-around items-center p-5">
      <section className="font-aurore text-center space-y-5 w-full">
        <span className="text-xl">the wedding of</span>
        <h1 className="text-6xl">Albar <br />& Yulia</h1>
        <span className="text-xl ml-24">02.02.2024</span>
      </section>
      <p className="text-lg">to: Nama Tamu</p>
      <section className="w-full flex justify-center items-center">
        <Image src={'/ilustration/female-1.svg'} alt="Albar Moerhamsa" width={180} height={250} />
        <Image src={'/ilustration/male-1.svg'} alt="Albar Moerhamsa" width={180} height={250} />
      </section>
      <button className="bg-white/50 bg-opacity-10 w-full p-2.5 rounded-full border border-black ">
        Buka Undangan
      </button>
    </div>
  );
}
