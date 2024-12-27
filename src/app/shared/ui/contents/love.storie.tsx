import Image from 'next/image'
import React from 'react'

export default function LoveStory() {
    return (
        <section className="w-screen h-max flex flex-col justify-around items-center py-10 px-5">
            <h1 className="text-4xl font-semibold py-4">
                <span className="font-aurore">Love</span> Story
            </h1>

            <section className='grid grid-cols-2 gap-5'>
                <Image data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="200" src={'/storyboard/scene-1.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain" />
                <Image data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="400" src={'/storyboard/scene-2.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain" />
                <Image data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600" src={'/storyboard/scene-3.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain" />
                <Image data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="800" src={'/storyboard/scene-4.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain" />
                <Image data-aos="flip-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" src={'/storyboard/scene-5.svg'} alt="Love Story" width={1000} height={600} className="w-full object-contain col-span-2" />
            </section>
        </section>
    )
}
