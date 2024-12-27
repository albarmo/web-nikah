'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Container({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='container' className="vertical-paper shadow-xl overflow-hidden">
            {children}
        </div>
    )
}
