import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Bg from '../../../assets/bg2Flip.jpg';

import PartnerBottom from "../../Partners/PartnerBottom"

import AfBg2 from '../../../assets/afBg2.jpg'

import '../about.css';

const OurHeritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden"); // reset when out of view
    }
  }, [isInView, mainControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      ref={ref}
      className='h-[700px] md:h-[100vh] w-full bg-cover bg-center flex justify-center gap-[35px] items-center flex-col'
      style={{ backgroundImage: `url("${Bg}")` }}
    >
      <motion.div
        className='basis-[50%] md:basis-[35%] h-full w-[90%] flex justify-between items-center flex-row '
        variants={fadeInDown}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <PartnerBottom />
      </motion.div>

      <div className='basis-[46%] h-full w-full flex justify-end items-center'>
        <div className='h-full w-full md:w-[60%] about-card  rounded-[12px] flex justify-end items-center relative'
          style={{ boxShadow: "2px 2px 5px #000" }}
        >
          <div className='hidden md:block h-[90%] w-[70%] absolute bg-[blue] about-card-img left-[-50%] rounded-[6px] bg-cover bg-center'
            style={{ backgroundImage: `url("${AfBg2}")` }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.3)]'></div>
          </div>
          <div className='md:basis-[70%] h-full w-full px-[25px] md:px-[50px] py-[20px] flex justify-center items-start md:items-end gap-[20px] flex-col'>
            <h2 className='titleText'
              style={{ fontFamily: "Satoshi" }}
            >What we do</h2>
            <p className='paragraph tex-left md:text-right'>

              We deliver institutional-grade wealth management to more people through a powerful blend of smart technology, global expertise, and human judgment. We build cost-efficient, adaptive investment strategies that grow with people's lives.

              No one-size-fits-all portfolios. Life evolves, markets shift, and goals change. We manage the details, so our clients can focus on what matters most.

            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default OurHeritage;
