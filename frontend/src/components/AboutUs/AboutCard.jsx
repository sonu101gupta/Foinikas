import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css'

// Word-by-word animation variant
const wordPopVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.5, type: 'spring', stiffness: 100 },
  }),
};

// Fade-in on scroll variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Split text into animated spans
const splitText = (text, controls) =>
  text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      custom={i}
      initial="hidden"
      animate={controls}
      variants={wordPopVariant}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ));

const AboutCard = ({ icon, title, desc, subText, image_url }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [bg, setBg] = useState("ac1")

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  useEffect(() => {
    if (subText === "Clarity over noise") {
      setBg("ac1")
    }else if(subText === "Built for life"){
      setBg("ac2")
    }else if(subText === "Efficiency that counts"){
      setBg("ac3")
    }else if(subText === "Trust is everything"){
      setBg("ac4")
    }
  }, [subText])

  return (
    <div
      // Find the gradient effect in css
      className={`h-full w-full rounded-[20px]  bg-cover bg-center flex justify-center items-center ${bg}`}
      ref={ref}
    >
      <div className='h-[90%] w-[90%] ac-hover flex justify-center items-start flex-col gap-[5px] px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
      style={{boxShadow:"2px 2px 5px #000"}}
      >
        <div className='mb-[10px] w-10'
        
        >{icon}</div>

        {/* <h4 className='text-[1.2rem] font-[700] text-white'>
        {splitText(title, controls)}
      </h4> */}

        <h5 className=' font-[900] text-white about-card-title'
        
        >
          {/* {splitText(subText, controls)} */}
          {subText}
        </h5>

        <motion.p
          className=' font-[400] text-white about-card-p'
          variants={fadeInUp}
          initial='hidden'
          animate={controls}
        >
          {desc}
        </motion.p>

        <motion.div
          className='w-full h-[2px] bg-white mt-[20px]'
          variants={fadeInUp}
          initial='hidden'
          animate={controls}
        />
      </div>
    </div>
  );
};

export default AboutCard;
