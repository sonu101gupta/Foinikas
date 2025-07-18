import React from 'react'

const AuthLeft = () => {
    return (
        <div className='h-full w-full flex justify-start items-center px-[50px]'
            // style={{ background: "linear-gradient(to bottom right, #4338ca, #9333ea, #3b82f6)" }}
            style={{ background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)" }}
            
        >
            <div className='h-[95%] w-[90%] flex justify-between items-start flex-col '>
                <h1 className='titleText my-[40px]'
                style={{fontFamily:"Crimson Pro"}}
                >Why Choose Foinikas?</h1>
                <div className='h-[65%] w-[100%] flex justify-between items-start flex-col'>
                    <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px]'>
                        <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-blue-400" data-lov-id="src/pages/LoginSignup.tsx:23:12" data-lov-name="Shield" data-component-path="src/pages/LoginSignup.tsx" data-component-line="23" data-component-file="LoginSignup.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-blue-400%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        </div>
                        <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                        <h4 className='tertiaryTitle text-white' style={{fontSize:"1.2rem"}}>Bank-grade security</h4>
                            <p className='paragraph'>Fully regulated European wealth manager offering transparent pricing and industry-leading security infrastructure to safeguard your investments</p>
                        </div>
                    </div>
                    <div className='basis-[23%] h-full w-full flex justify-between items-start flex row mb-[20px] gap-[20px]'>
                        <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-6 w-6 text-green-400" data-lov-id="src/pages/LoginSignup.tsx:28:12" data-lov-name="TrendingUp" data-component-path="src/pages/LoginSignup.tsx" data-component-line="28" data-component-file="LoginSignup.tsx" data-component-name="TrendingUp" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-green-400%22%7D"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        </div>
                        <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                        <h4 className='tertiaryTitle text-white' style={{fontSize:"1.2rem"}}>Performance that adapts with markets</h4>
                            <p className='paragraph'>Proprietary strategies dynamically adjust to evolving conditions—so your capital is always working smarter.</p>
                        </div>
                    </div>
                    <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px]'>
                        <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-6 w-6 text-purple-400" data-lov-id="src/pages/LoginSignup.tsx:33:12" data-lov-name="Globe" data-component-path="src/pages/LoginSignup.tsx" data-component-line="33" data-component-file="LoginSignup.tsx" data-component-name="Globe" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-purple-400%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        </div>
                        <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                            <h4 className='tertiaryTitle text-white' style={{fontSize:"1.2rem"}}>Global reach, tailored to you</h4>
                            <p className='paragraph'>Invest across markets, asset classes, and currencies—backed by deep portfolio intelligence.</p>
                        </div>
                    </div>
                    <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px]'>
                        <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-cyan-400" data-lov-id="src/pages/LoginSignup.tsx:38:12" data-lov-name="Users" data-component-path="src/pages/LoginSignup.tsx" data-component-line="38" data-component-file="LoginSignup.tsx" data-component-name="Users" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-cyan-400%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                        <h4 className='tertiaryTitle text-white' style={{fontSize:"1.2rem"}}>Your goals, guided by expertise</h4>
                            <p className='paragraph'>Partner with seasoned professionals who understand your ambitions and navigate with clarity.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[18%] w-[90%] rounded-[12px] bg-[rgba(0,0,0,0.3)] mb-[40px] flex justify-center items-start flex-col px-[30px] gap-[20px] mt-[20px]' 
                    style={{ boxShadow: "2px 2px 5px #000" }}
                >
                    <h3 className='flex justify-center items-center flex-row text-white font-[500] text-[1.3rem] gap-[20px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 text-green-400" data-lov-id="src/pages/LoginSignup.tsx:95:14" data-lov-name="Check" data-component-path="src/pages/LoginSignup.tsx" data-component-line="95" data-component-file="LoginSignup.tsx" data-component-name="Check" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-400%22%7D"><path d="M20 6 9 17l-5-5"></path></svg>
                        Regulated & Secure
                    </h3>
                    <p className='paragraph'>Fully regulated European wealth management firm with transparent pricing and no hidden fees.</p>
                </div>
            </div>

        </div>
    )
}

export default AuthLeft
