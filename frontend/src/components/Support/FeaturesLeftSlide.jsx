import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './flSlide.css'


import Airplane from '../../assets/dotPattern.png'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FeaturesLeftSlide = () => {
  const containerRef = useRef(null);
  const cardStackRef = useRef(null);

  const cardData = [{
    title: "Liquidity Booster",
    subText: "Cash Allocation",
    desc: "Generate steady, growing income through diversified sources built to beat inflation and banking interest. Perfect for income-focused investors who value predictability over peak returns"
  },
  {
    title: "Resilient Growth",
    
    subText: "Managed Index Portfolios",
    desc: "Stay diversified, liquid, and cost-effective with a portfolio powered by institutional ETF strategies. Designed to flex across life stages and risk levels—your smart core for steady growth"
  },
  {
    title: "Strategic Holdings",
    subText: "Direct Equity Investing",
    
    desc: "Build focused, long-term wealth through carefully selected, high-conviction stock picks—ideal for any mid-career investor seeking meaningful growth"
  },
  {
    title: "Wealth Scaling",
    subText: "Thematic Investing",
    desc: "Capture long-term upside by investing in long-run secular mega trends and innovation. Best suited for early-stage investors willing to take on more risk in exchange for greater potential return over time"
  }
]

  useEffect(() => {
    if (!containerRef.current || !cardStackRef.current) return;

    const cards = cardStackRef.current.querySelectorAll('.card');
    const totalCards = cards.length - 1;
    const cardWidth = cards[0].clientWidth;
    const containerWidth = containerRef.current.clientWidth;
    const offset = (containerWidth - cardWidth) / Math.max(1, totalCards - 1);
    const gap = 20;



    // Set the initial position of all cards (e.g., off-screen to the right)
    gsap.set(cards, {
      x: (i) => {
        // Example: all cards start 100vw to the right
        return i === 0 ? 0 : window.innerWidth + (i * 50);
      },
    });

    const animation = gsap.to(cards, {
      x: (i) => {
        const customOffsets = [0, -675, -700, -725, -750]; // Change values here for each card
        return customOffsets[i] || 0;
      },
      duration: (i) => 0.5 * i,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        markers: false, // Remove in production
        scrub: true,
        end: `+=${totalCards * 100}% bottom`,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflowX-hidden"
    style={{overflowX:"hidden", overflowY:"hidden"}}
    >
      {/* Fixed progress indicator (optional) */}
      <div className="fixed top-5 w-full h-2 bg-black z-50"
      ></div>

      {/* Cards section */}
      <section
        ref={containerRef}
        // className="stacking-cards h-[100vh] w-[100vw] flex items-center justify-center bg-[#FFF8DC] flex-col relative overflowY-hidden"
        // className="stacking-cards h-[100vh] w-[100vw] flex items-center justify-center bg-[#a40b81] flex-col relative overflowY-hidden"
        className="stacking-cards h-[100vh] w-[100vw] flex items-center justify-center   flex-col relative overflowY-hidden"
        // style={{backgroundImage:`url(${BG})`}}
        // style={{
        //   background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)"
        // }}

        style={{
          background: "linear-gradient(180deg, #4F012E 0%, #8c0663 100%)"
        }}
      >

        <img src={Airplane} alt=""  className='absolute bottom-[-5%] w-[100%]'/>
        <div className='h-[25%] w-[60%] flex justify-center items-center'>
          <h1 className='titleText text-center'
          style={{color:"#fff", fontSize:"2.5rem", fontWeight:"500", fontFamily:"Satoshi"}}
          >Align Strategy with Life Stage to Optimize Every Aspect of Your Portfolio</h1>
        </div>
        <div className="w-full h-[55%] px-[clamp(20px,5vw,80px)]">
          <div ref={cardStackRef} className="card-stack h-full flex gap-5">
            {/* Intro card */}
            <div className="card card-intro w-[calc(100vw-40px)] flex-shrink-0 md:w-[45%]">
              <div className="h-full p-5">
                {/* <div>0</div> */}
              </div>
            </div>

            {/* Numbered cards */}
            {cardData.map((data, idx) => (
              <div key={idx} className="card card-slide w-[calc(50vw-40px)] flex-shrink-0 md:w-[25%]">
                <div className="h-full px-[30px] py-[40px] flex justify-start items-start gap-[20p] flex-col">
                  <small className='text-white'>{data.subText}</small>
                  <h3 className='secondaryTitle'
                  // style={{color:"#680037"}}
                  style={{color:"#fff"}}
                  >{data.title}</h3>
                  <p className='paragraph w-[75%]'
                  style={{color:"#fff"}}
                  >{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      {/* <div className="h-[33vh]"></div> */}
    </div>
  );
};

export default FeaturesLeftSlide;