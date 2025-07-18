import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Bg1 from '../../assets/bg1.jpg';
import Bg2 from '../../assets/main12.jpg'
import LineChart from './Graphs/LineChart';
import NewHeads from './NewHeads';
import SectorPerformanceGrid from './Graphs/SectorPerformanceGrid';
import FearMeter from './Graphs/FearMeter';


const Insights = () => {

  const [insight, setInsights] = useState("Market")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='bg-black'>

        <div
          className='bg-black h-auto md:h-[175vh] w-full flex justify-center items-center flex-col gap-[20px] bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url("${Bg1}")` }}
        >

          <div className='h-[85%] w-[90%] flex justify-center items-center flex-col  gap-[30px] mt-[50px]'>
            <h2 className='titleText mt-[50px] md:mt-[0] text-center'
              style={{ fontFamily: "Satoshi", fontSize: "3.2rem" }}
            >Foinikas Insights</h2>
            <p className='paragraph text-center px-[15%]'>Stay ahead with expert analysis and curated insights into the evolving financial landscape. Our team distills key trends, policy shifts, and economic signals.</p>
            {/* <div className='h-[5%] w-full bg-[rgba(255,255,255,0.3)] px-[30px] py-[20px] backdrop-blur-[5px] rounded-[12px] flex justify-between items-center'
          style={{ boxShadow: "3px 3px 25px #000" }}
        >
          <div className='flex justify-center items-center flex-row gap-[20px]'>
            <p className='paragraph cursor-pointer'
              onClick={() => {
                setInsights("Market")
              }}
            >Market</p>
            <p className='paragraph cursor-pointer'
              onClick={() => {
                setInsights("Themes")
              }}
            >Themes</p>
          </div>

        </div> */}
         {!isLoggedIn && <div className='absolute z-[9] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] h-[100vh] md:h-[1510px] w-full rounded-[12px] flex justify-center items-center mt-[115%] md:mt-[35%]'>
              <h3 className='tertiaryTitle text-[#9932CC] bg-white px-[40px] py-[20px] rounded-[12px]'
                style={{ boxShadow: "5px 5px 15px #000" }}
              >Login to See</h3>
            </div>}
            <div className='h-[85%] w-full flex justify-between items-center flex-col'>
              <div className='basis-[100%] h-full w-full flex justify-between items-start flex-col md:flex-row'>
                <div className='basis-[57%] h-full w-full  flex justify-start  items-center flex-col gap-[15px]'>
                  <div className="basis-[20%] h-full w-full flex justify-center items-start gap-[15px] flex-col">
                    <h3 className='secondaryTitle text-white'>{insight} Overview</h3>
                    <p className='paragraph'>Track the pulse of global markets with our concise summaries and strategic takeaways. From equities and currencies to energy and tech, we highlight what matters most and why it’s moving now.</p>
                  </div>
                  <div className='basis-[20%] h-full w-full flex justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px]'
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >
                    {/* <MarketChart /> */}
                    {/* <LineChart small={false} indice={'SPY'} /> */}
                    <FearMeter />
                  </div>
                  <div className='basis-[60%] relative h-full overflow-hidden w-full flex justify-center items-center bg-[rgba(255,255,255,0.1)]  backdrop-blur-[5px] rounded-[12px]'
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >
                    {/* <MarketChart /> */}

                    <LineChart small={false} indice={'SPY'} />


                  </div>

                </div>
                <div className='basis-[40%] h-[60%] mt-[20px] md:mt-[0] w-full flex justify-between items-center flex-col relative overflow-hidden'>
                  
                  <div className=' md:basis-[100%] overflow-hidden h-full w-full px-[30px] py-[20px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px]'
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >


                    <div className='w-full h-[10%] flex justify-between items-center flex-row gap-[20px] md:gap-[0]'>
                      <h4 className='tertiaryTitle text-white'>News Headlines</h4>
                      <Link to={'/news'} className='secondary-btn hidden md:flex justify-center items-center'>Read More</Link>
                      <Link to={'/news'} className='secondary-btn md:hidden flex justify-center items-center'>Read </Link>
                    </div>

                    <div className='h-[1px] w-full bg-[#d9d9d9] mt-[15px]'></div>
                    <NewHeads />
                  </div>
                </div>

              </div>
              {/* <div className='basis-[25%] h-full w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px]'
            style={{ boxShadow: "3px 3px 25px #000" }}
          ></div> */}
            </div>
          </div>

        </div>
        <div className='bg-black h-auto md:h-[105vh] mt-[40px] md:mt-[0] flex justify-center items-center bg-center gap-[40px] bg-cover bg-no-repeat flex-col'
          style={{ backgroundImage: `url("${Bg2}")` }}
        >
          {!isLoggedIn && <div className='absolute z-[9] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] h-[250vh] md:h-full w-full rounded-[12px] flex justify-center items-center'>
              {/* <h3 className='tertiaryTitle text-[#9932CC] bg-white px-[40px] py-[20px] rounded-[12px]'
                style={{ boxShadow: "5px 5px 15px #000" }}
              >Login to See</h3> */}
            </div>}
          <div className=' md:basis-[40%] h-full w-[90%] flex justify-between items-center flex-col md:flex-row gap-[20px] md:gap-[0] relative'>
           
            <div className='basis-[24%]  bg-[rgba(255,255,255,0.3)]  hover:bg-[#c8bdf45c] backdrop-blur-[5px] h-[80%] w-full rounded-[12px] flex justify-center items-center'
              style={{ boxShadow: "2px 5px 10px #000", transition: "0.5s" }}
            >
              <LineChart small={true} indice={"DIA"} />
            </div>
            <div className='basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c]  h-[80%] w-full bg-[blue] rounded-[12px] flex justify-center items-center'
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice={"QQQ"} />
            </div>
            <div className='basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c]  h-[80%] w-full bg-[blue] rounded-[12px] flex justify-center items-center'
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice={"XLK"} />
            </div>
            <div className='basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c] h-[80%] w-full bg-[blue] rounded-[12px] flex justify-center items-center'
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice={"EEM"} />
            </div>
          </div>
          <div className='basis-[50%] h-full w-[90%] relative bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px]  mb-[80px] p-[2]'
            style={{ boxShadow: "5px 5px 15px #000" }}
          >
           
            <SectorPerformanceGrid />
          </div>
        </div>
      </div>
  )
}

export default Insights
