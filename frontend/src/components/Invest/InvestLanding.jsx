import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Bg1 from '../../assets/bg1.jpg';
import AutoCarousel from './AutoCarousel';
import './invest.css'

import Car1 from '../../assets/car1.png'
import Car2 from '../../assets/Car2.png'
import Car3 from '../../assets/Car3.png'
import Car4 from '../../assets/Car4.png'
import Car5 from '../../assets/Car5.png'

const InvestLanding = () => {
    const headingRef = useRef([]);
    const [hovering, setHovering] = useState(false);
    const textRef = useRef(null)
    const [coords, setCoords] = useState({ x: '50%', y: '50%' });

    headingRef.current = [];

    const addToRefs = (el) => {
        if (el && !headingRef.current.includes(el)) {
            headingRef.current.push(el);
        }
    };

    const handleMouseMove = (e) => {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x: `${x}px`, y: `${y}px` });
    };

    const items = [

        { id: 2, title: "Active Management", content: "We manage risk and opportunity in real time, using data, judgment, and global market insight.", img: Car2 },
        { id: 3, title: "Backed by Technology", content: "We combine institutional-grade platforms with expert support to help you invest with confidence.", img: Car3 },
        { id: 4, title: "Discipline ", content: "We help you stay on track—avoiding common investor mistakes like panic selling and trend chasing.", img: Car4 },
        { id: 5, title: "Built to Adapt", content: "Markets change. So does life. We actively adjust your portfolio as both evolve.", img: Car5 },
        { id: 1, title: "Tailored Portfolios", content: "We align each portfolio with your goals, risk profile, and life stage—not a model, not a benchmark.", img: Car1 },
    ];

    const headingText = ""
    return (
        <div
            className='bg-black h-[800px] md:h-[135vh] w-full flex justify-center items-center flex-col bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className='basis-[20%] h-full w-[95%] md:w-[70%] gap-[20px] flex justify-center md:justify-center items-center flex-col'>
                {/* <div className='w-auto  h-auto spotlight-container md:flex md:justify-center md:items-center leading-[normal]'>
                    <h1 className={`text-[3rem] md:text-[5rem] text-white font-[900] text-center spotlight-text ${hovering ? 'hovering' : ''}`}
                        data-text="Investment Strategies"
                        ref={textRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        style={{ fontFamily: "Crimson", '--x': coords.x, '--y': coords.y }}
                    >Investment Strategies</h1>
                </div> */}

                <h3 className='secondaryTitle text-white text-center'>Our Approach</h3>
                {/* <h4 className='tertiaryTitle my-[10px] text-white text-center'>Strategic investing, built around you</h4> */}
                <p className='paragraph text-center my-[10px]'>At Foinikas, we combine institutional-grade technology with active portfolio management to help you grow and protect wealth—intentionally, not passively. Every strategy is shaped by your goals, guided by research, and managed with care.</p>
                
            </div>
            <div className='basis-[60%] md:basis-[55%] h-full w-[90%] md:w-[80%] flex justify-center items-center flex-col'>
                <AutoCarousel items={items} count={3} />
                <Link to={"/book"} className='secondary-btn flex justify-center items-center my-[10px]'>Let's Talk</Link>
            </div>
        </div>
    )
}

export default InvestLanding
