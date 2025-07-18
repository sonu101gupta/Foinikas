import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Home from '../Home/Home'
import Wealth from '../Wealth/Wealth'
import Partners from '../Partners/Partners'
import OurFeatures from '../OurFeatures/OurFeatures'

import Finances from '../Finances/Finances'
import LandingCTA from '../CTASection/LandingCTA'

import Tablet from '../../assets/tablet7.png'
import Support from '../Support/Support'
import FeaturesLeftSlide from '../Support/FeaturesLeftSlide'


gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    useEffect(() => {
        // Reset or set initial styles
        gsap.set(".target", {
            x: -0.25 * screenWidth,
            y: 0,
            rotate: 0,
            rotateZ: 0,
            xPercent: 0,
            bottom: -350,
            top: "auto",
            opacity: 0
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".home-section",
                start: "35% center",
                end: "60% center", // short window just to trigger reveal
                scrub: true,
                markers: false,
            }
        }).to(".target", {
            opacity: 1,
            y: -0.1 * screenHeight, // optional smooth entrance
            duration: 1,
            ease: "power1.out",
        });

        // 💰 Wealth Section Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".wealth-section",
                start: "-80% center",
                end: "-30% 50%",
                scrub: true,
                markers: false,
            }
        }).to(".target", {
            x: -0.25 * screenWidth,
            y: -0.78 * screenHeight,
            scale: 0.85,
            rotateZ: 80,
            duration: 1,
            ease: "none",
            opacity: 1
        });

          // ✨ finance Section Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".finances-section",
                start: "-30% center",
                end: "30% 100%",
                scrub: true,
                markers: false,
            }
        }).to(".target", {
            x: -0.25 * screenWidth,
            y: -0.54 * screenHeight,
            rotate: 0,
            // scale: 1,
            scaleX: 1.10,
            scaleY: 1,
            // rotateZ: -15,
            duration: 6,
            ease: "none",
            zIndex: 0,
            opacity: 1
        });


        // ✨ Features Section Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".features-section",
                start: "-20% center",
                end: "5% 100%",
                scrub: true,
                markers: false,
            }
        }).to(".target", {
            // x: -1000,
            y: -600,
            // rotate: 5,
            scale: 0.5,
            // rotateZ: -15,
            duration: 26,
            ease: "none",
            opacity: 0
        });



      


        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".cta-section",
        //         start: "-65% center",
        //         end: "bottom 100%",
        //         scrub: true,

        //         markers: false,
        //     }
        // }).to(".target", {
        //     x: -1270,
        //     y: -345,
        //     rotate: 180,
        //     scale: 0.1,

        //     // rotateZ: -15,
        //     duration: 6,
        //     ease: "none",
        //     zIndex: 0
        // });

        // ✨ Support section Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".support-section",
                start: "-17% center",
                end: "80% 100%",
                scrub: true,
                markers: false,
            }
        }).to(".target", {
            x: -1575,
            y: -325,
            rotate: 90,
            scale: 0.75,
            // rotateZ: -15,
            duration: 6,
            ease: "none",
            zIndex: 0,
            opacity: 0
        });






        // Optional cleanup (if component unmounts)
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='w-full flex justify-center items-center flex-col relative'>
            {/* <Navbar /> */}
            <div className="home-section w-full">
                <Home />
            </div>
            <div className="wealth-section w-full">
                <Wealth />
            </div>



            {/* <div className='ibkr-section w-full'>
                <IBKRLanding />
            </div> */}

            {/* <div className='about-section w-full'>
                <HomeAbout />
            </div> */}


            <div className="finances-section w-full">
                <Finances />
            </div>

            <div className='features-section w-full'>
                <OurFeatures />
            </div>
            <div className='left-slide w-full md:flex hidden'>
                <FeaturesLeftSlide/>
                
            </div>

            <div className='partners-section w-full'>
                <Partners />
            </div>
            
            <div className='support-section w-full'>
                <Support />
            </div>

            

            

            

            {/* <div className='cta-section w-full'>
                <LandingCTA />
            </div> */}


            {/* Target animated red circle */}

            <div
                style={{ mixBlendMode: "normal" }}
                className="target fixed top-0 w-[400px] h-[500px] z-50 hidden md:flex justify-center items-center"
            >
                <img
                    // src="https://img.freepik.com/premium-photo/stock-market-analysis-economy-growth-concept-with-rising-digital-green-financial-chart-graphs-dark-blurry-technological-background-3d-rendering_670147-38532.jpg"
                    src={Tablet}
                    alt=""
                    className="object-cover w-full h-full rounded-[18px]" style={{ filter: "drop-shadow(5px 5px 25px #000)" }}
                />
                {/* <div className="absolute top-0 left-50% w-[75%] h-full bg-black opacity-[0.2] pointer-events-none"></div> */}
            </div>

        </div>
    )
}

export default Landing
