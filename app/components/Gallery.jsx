"use client"

import LightGallery from 'lightgallery/react';
import { cars, gallery } from '@/_data/db';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// If you want you can use SCSS instead of css

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import React from 'react'

// import Range from "@/app/images/range1.jpg"
// import Ram from "@/public/images/ram.avif"
import Image from 'next/image';
import Link from 'next/link';


const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    console.log(gallery)
    
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {
                    gallery.map((car)=>(

                <a href= {'/image/range1.avif'}>
                    <Image alt="img1" src={car} />
                </a>
                    ))
                }
            </LightGallery>
        </div>
    );
}

export default Gallery