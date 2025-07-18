import React from 'react'
import { Link } from 'react-router-dom'
import './partners.css'

import Pcta1 from '../../assets/photos/family.jpg'
import Pcta2 from '../../assets/photos/career.jpg'
import Pcta3 from '../../assets/photos/education.png'
import Pcta4 from '../../assets/photos/retire.jpg'

const PartnersCTA = () => {
    return (
        <div className='h-full w-full flex justify-between items-center flex-col '>
            <div className='basis-[28%] md:basis-[37%] h-full w-full flex justify-evenly items-center flex-col gap-[10px]'>
                <h2 className='titleText text-center md:text-left'
                style={{fontFamily:"Satoshi"}}
                >Make Your Money Echo Through Life</h2>
                <p className='paragraph text-center md:w-[70%] hidden md:block'
                style={{fontSize:"1.3rem"}}
                >Vacation keys, university caps, carefree retirements—whatever milestone is on the horizon, we blend human guidance with forward-thinking tools to amplify every financial ripple</p>
                <p className='paragraph text-center md:w-[70%] block md:hidden'
                style={{fontSize:"1rem"}}
                >Vacation keys, university caps, carefree retirements—whatever milestone is on the horizon, we blend human guidance with forward-thinking tools to amplify every financial ripple</p>
                <Link to={"/book"} className='secondary-btn flex justify-center items-center '>Let's Talk</Link>
            </div>
            <div className='basis-[70%] md:basis-[60%] h-full w-full md:bg-[rgba(255,255,255,0.3)] md:backdrop-blur-[5px] rounded-[12px] flex justify-evenly items-center flex-col md:flex-row'
                // style={{ boxShadow: "2px 2px 5px #000" }}
            >
                <div className='basis-[23%] pcta-card w-full h-[85%] bg-[red] rounded-[12px] relative overflow-hidden'>
                    {/* <img src={Pcta1} alt="" 
            style={{objectFit:"contain"}}
            /> */}
                    <div className='h-full w-full bg-cover bg-top pcta-card-img'
                        style={{ backgroundImage: `url('${Pcta1}')` }}
                    >
                        <div className='h-full w-full '
                        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.9))"}}
                        ></div>
                    </div>
                    <p className='absolute z-[1] font-[700] text-[1.125rem] bottom-[20px] left-[20px] text-white'>Family</p>
                </div>
                <div className='basis-[23%] pcta-card w-full h-[85%] bg-[red] rounded-[12px] relative overflow-hidden'>
                    {/* <img src={Pcta1} alt="" 
            style={{objectFit:"contain"}}
            /> */}
                    <div className='h-full w-full bg-cover bg-center pcta-card-img'
                        style={{ backgroundImage: `url('${Pcta2}')` }}
                    >
                        <div className='h-full w-full '
                        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.9))"}}
                        ></div>
                    </div>
                    <p className='absolute z-[1] font-[700] text-[1.125rem] bottom-[20px] left-[20px] text-white'
                    style={{fontFamily: "Satoshi"}}
                    >Career </p>
                </div>
                <div className='basis-[23%] pcta-card w-full h-[85%] bg-[red] rounded-[12px] relative overflow-hidden'>
                    {/* <img src={Pcta1} alt="" 
            style={{objectFit:"contain"}}
            /> */}
                    <div className='h-full w-full bg-cover pcta-card-img'
                        style={{ backgroundImage: `url('${Pcta3}')` }}
                    >
                        <div className='h-full w-full '
                        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.9))"}}
                        ></div>
                    </div>
                    <p className='absolute z-[1] font-[700] text-[1.125rem] bottom-[20px] left-[20px] text-white'
                    style={{fontFamily: "Satoshi"}}
                    >Education </p>
                </div>
                <div className='basis-[23%] pcta-card w-full h-[85%] bg-[red] rounded-[12px] relative overflow-hidden'>
                    {/* <img src={Pcta1} alt="" 
            style={{objectFit:"contain"}}
            /> */}
                    <div className='h-full w-full bg-cover bg-center pcta-card-img'
                        style={{ backgroundImage: `url('${Pcta4}')` }}
                    >
                        <div className='h-full w-full '
                        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.9))"}}
                        ></div>
                    </div>
                    <p className='absolute z-[1] font-[700] text-[1.125rem] bottom-[20px] left-[20px] text-white'>Retirement </p>
                </div>
            </div>
        </div>
    )
}

export default PartnersCTA
