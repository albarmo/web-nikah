'use client'

import React, { useEffect, useState } from 'react'
import useMousePosition from '@/app/shared/hooks/useMousePosition';
import Image from 'next/image'
import { useWindowScrollPositions } from '@/app/shared/hooks/useWindowScrollPositions';
import Link from 'next/link';

export default function ExpInteractiveHero({ guestName }: { guestName: string }) {
    const mousePosition = useMousePosition();
    const cursorXPos = mousePosition?.x ?? 250

    const [isMoving, setIsMoving] = useState<{ status: boolean, direction: 'none' | 'left' | 'right' }>({ status: false, direction: 'none' })
    const [lastPoint, setLastPoint] = useState<{ x: number }>({ x: 0 })

    useEffect(() => {
        setTimeout(() => {
            setIsMoving({ status: false, direction: 'none' })
            const hasMouseCheck = (e: { clientX: number; }) => {
                const direction = (
                    e.clientX > lastPoint?.x ? 'right'
                        : e.clientX < lastPoint?.x ? 'left'
                            : 'none'
                )
                setIsMoving({ status: true, direction: direction })
                setLastPoint({ x: e.clientX || 0 })

                // Kill the event listener, so it executes only once
                window.removeEventListener('mousemove', hasMouseCheck, false);
            };

            window.addEventListener('mousemove', hasMouseCheck, false);
            setIsMoving({ status: false, direction: 'none' })
        }, 500)
    }, [lastPoint?.x, mousePosition.x])

    const { scrollX, scrollY } = useWindowScrollPositions()
    console.log(scrollX, scrollY)

    return (
        <div className='relative max-h-screen w-screen'>
            <div className='flex space-x-10 h-screen w-full'>
                <section className='w-full h-2/4 flex justify-center items-center flex-col space-y-5'>
                    <section className="font-aurore text-center space-y-5 w-screen">
                        <span className="text-xl">the wedding of</span>
                        <h1 className="text-6xl">Albar <br />& Yulia</h1>
                        <span className="text-xl ml-24">02.02.2024</span>
                    </section>
                    <p className="text-lg text-center">Kepada Yth: <br /> {guestName?.replaceAll('-', " ")}</p>
                    <Link href={`/content?to=${guestName?.replaceAll('-', " ")}`} className="bg-white/50 w-40 text-center bg-opacity-10  p-2.5 rounded-full border border-black ">
                        Buka Undangan
                    </Link>
                </section>
                <section className='w-full h-2/3 flex justify-center items-center flex-col space-y-5'>
                    <section
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" className="z-0 flex w-80"
                    >
                        <section className="text-center space-y-5">
                            <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.</p>
                            <p>Sampai Jumpa,</p>
                            <h1 className="text-3xl font-aurore">
                                Albar & Yulia
                            </h1>
                        </section>
                    </section>
                </section>
            </div>

            <Image
                src={`/ilustration/moving-${isMoving.direction}.svg`}
                alt="Love Story"
                width={200}
                height={250}
                style={{
                    position: "absolute",
                    left: cursorXPos - 140,
                    bottom: 120,
                }}
                className='transition-all delay-75 transform-gpu'
            />
            <Image
                src="/layer-2.svg"
                alt="Foreground"
                width={900}
                height={500}
                className='absolute z-30 -bottom-96 max-w-screen-2xl md:w-screen h-full object-cover object-top'
                priority
            />
        </div>
    )
}
