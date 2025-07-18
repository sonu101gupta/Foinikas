import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { Link,useLocation } from 'react-router-dom';

import BG from '../../assets/bg1.jpg'

const Consultation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowScheduler(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>


      {!isLoggedIn && <div className='bg-black h-[100vh]  w-full flex justify-center items-center flex-col gap-[20px] bg-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url("${BG}")` }}>
        <div className='w-[80%] md:w-[40%] h-[30%] flex justify-center items-center gap-[20px] flex-col rounded-[12px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[5px]'
        style={{ boxShadow: "2px 5px 15px #000" }}
        >
          <p className="flex justify-around items-center flex-col gap-[15px] tertiaryTitle text-white"
            
          >
            Please login to book a Consultation.
            
          </p>
          <Link to={"/login"} state={{ from: location }} replace className='primary-btn flex justify-center items-center'>Login</Link>
        </div>
      </div>}


      {isLoggedIn && <div className="h-[100vh] w-full bg-black  bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url("${BG}")` }}
      >

        <div className='h-[80%] w-full md:w-[65%] mt-[50px] flex justify-center items-center flex-col rounded-[12px]'
          // style={{ boxShadow: "5px 5px 15px #000" }}
        >
          <h2 className="secondaryTitle text-white text-center">Book a Free Consultation</h2>
          
          {/* {!showScheduler ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Proceed to Booking
              </button>
            </form>
          ) : ( */}
            <div className=" w-[80%]  h-auto  mt-[40px] overflow-none flex justify-center items-center bg-[rgba(255,255,255,0.1)] rounded-[12px] backdrop-blur-[10px] py-[20px]"
            style={{boxShadow:"2px 2px 5px #000"}}
            >
              <InlineWidget className='w-full'
                url="https://calendly.com/hellofoinikas/30min" // Replace with your actual Calendly link
                // prefill={{
                //   name,
                //   email,
                // }}
                styles={{ height: '600px' }}
              />
            </div>
          {/* )} */}
        </div>

      </div>}
    </>
  );
};

export default Consultation;
