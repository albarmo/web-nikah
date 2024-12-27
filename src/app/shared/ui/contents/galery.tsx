import Image from 'next/image'
import React from 'react'

export default function Galery() {
    return (
        <div className="relative h-screen space-y-5">
            <section className="absolute top-0 right-0 bg-[#FF5E00]/70 size-32 rounded-full"></section>
            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="h-max z-0 flex p-5"
            >
                <section>
                    <h1 className="text-4xl font-semibold py-4 text-left leading-6">
                        <span className="font-aurore">Momen</span><br /> Bahagia.
                    </h1>
                    <p>Poto poto potato...</p>
                </section>
                <Image className="-z-0 right-0 w-full object-contain" src={'/ilustration/couple-moment.svg'} alt="Love Story" width={600} height={600} />
            </section>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="absolute top-40 grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
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
    )
}
