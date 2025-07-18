import React from 'react'
import Bg1 from '../../assets/bg1Flip.jpg';
import Believe from '../../assets/believe.jpg';
import './invest.css'

const InvestBelieve = () => {
    return (
        <div
            className='bg-black h-[1500px] md:h-[100vh] w-full flex justify-center items-center gap-[20px] flex-col bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >

            <div className='h-[95%] md:h-[80%] w-[95%] md:w-[80%] flex justify-between items-center flex-col md:flex-row'>
                <div className='basis-[32%] h-full w-full  flex justify-between items-center flex-col md:flex-col'>
                    <div className='basis-[48%] h-full w-full ic1 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex justify-center items-start  flex-col gap-[10px] px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
                            style={{ boxShadow: "2px 2px 5px #000" }}>

                            <h4 className='tertiaryTitle text-white'>Your goals deserve strategy, not shortcuts</h4>
                            <p className='paragraph'>Every investor is different—and your portfolio should be, too. We align investment strategy with your unique life stage, goals, and risk comfort, using institutional tools that adapt as your needs evolve.</p>
                        </div>
                    </div>
                    <div className='basis-[48%] h-full w-full ic2 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex justify-center items-start flex-col gap-[10px] px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white'>Real investing means looking beyond the market noise</h4>
                            <p className='paragraph'>We don't chase trends or day-trade headlines. Our active approach focuses on long-term drivers of return—secular themes, real risks, and tactical shifts that can unlock opportunity in changing markets.</p>
                        </div>
                    </div>
                </div>
                <div className='basis-[32%] h-full w-full  rounded-[12px]  bg-cover bg-center overflow-hidden'
                    style={{ backgroundImage: `url("${Believe}")` }}
                >
                    <div className='h-full w-full bg-[rgba(0,0,0,0.3)] flex justify-between items-center flex-col py-[20px]'>
                        <div className='h-[10%] w-[90%] ac-hover bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] rounded-[12px] flex justify-center items-center'
                            style={{ boxShadow: "2px 2px 5px #000" }}
                        >
                            <h2 className='titleText'
                            style={{fontFamily:"Satoshi"}}
                            >We Believe</h2>
                        </div>
                        <div className='h-[50%] md:h-[50%] w-[90%] ac-hover flex justify-center items-start flex-col gap-[10px] px-[25px] bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] rounded-[12px]'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white'>Passive investing has limits-Life doesn't follow an index</h4>
                            <p className='paragraph'>Markets go up and down, but real life brings unexpected changes. Passive portfolios often fail to adjust when your life does. We actively manage risk and rebalance strategy to fit where you are now—not just where the market happens to be.</p>
                        </div>
                    </div>


                </div>
                <div className='basis-[32%] h-full w-full flex justify-between items-center flex-col'>
                    <div className='basis-[48%] h-full w-full ic4 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex justify-center items-start flex-col gap-[10px] px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white'>Guidance beats guesswork</h4>
                            <p className='paragraph'>Left alone, investors often fall into the same traps—panic selling, performance chasing, and overreacting to noise. That's where we come in. Our advisors help you stay focused, make clear decisions, and avoid the emotional missteps that hurt returns over time.</p>
                        </div>
                    </div>
                    <div className='basis-[48%] h-full w-full ic3 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex justify-center items-start flex-col gap-[10px] px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white'>Technology should empower, not replace, judgment</h4>
                            <p className='paragraph'>We use powerful, institutional-grade technology to monitor, rebalance, and optimize portfolios. But we believe good investing still requires human judgment—especially when the stakes are high.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InvestBelieve
