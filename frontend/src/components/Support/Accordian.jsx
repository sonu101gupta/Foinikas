import React, { useState } from 'react';
import './accordian.css';

const Accordian = () => {
  const [openItem, setOpenItem] = useState({ section: null, index: null });

  const faqData = {
    "Security & Custody": [
      {
        q: "How are my assets protected with Foinikas and Interactive Brokers Ireland (IBIE)?",
        a: "Client assets are held in segregated accounts under your name at Interactive Brokers Ireland (IBIE), a MiFID-regulated firm supervised by the Central Bank of Ireland (CBI). All client securities are kept separate from the firm’s own assets and reconciled daily, ensuring full protection and clear legal ownership."
      },
      {
        q: "What happens to my assets if IBIE encounters financial difficulties?",
        a: "In the unlikely event of IBIE’s insolvency, your invested assets remain unaffected due to segregation rules. Only uninvested client cash may be exposed, and eligible clients may receive compensation up to €20,000 under the Irish Investor Compensation Scheme (ICS)."
      },
      {
        q: "Are my cash holdings insured or protected?",
        a: "Cash is held in segregated bank accounts or qualifying money market funds. While not covered under a deposit guarantee scheme, IBIE applies rigorous risk controls and holds excess regulatory capital to further safeguard client cash."
      },
      {
        q: "Is there additional insurance for my assets beyond the €20,000 ICS coverage?",
        a: "Yes. Interactive Brokers maintains excess insurance coverage through Lloyd’s of London and other insurers, designed to protect assets beyond the statutory limits, subject to specific conditions."
      },
      {
        q: "How financially strong is Interactive Brokers?",
        a: "Interactive Brokers has one of the strongest balance sheets in the industry, with $17+ billion in equity capital, no long-term debt, and an A- credit rating from S&P. It also holds significantly more capital than required by regulators, ensuring stability and client protection."
      },
      {
        q: "Is Foinikas a regulated investment firm?",
        a: "Yes, our parent company Foinikas Wealth Management Ltd. is licensed and regulated by the Malta Financial Services Authority (MFSA) as an Investment Firm under the Investment Services Act. We operate in full compliance with EU MiFID II regulations, and are authorized to provide discretionary portfolio management across the European Economic Area (EEA). The MFSA supervises our operations to ensure the highest standards of client protection, governance, and conduct."
      }
    ],
    "Transparency & Access": [
      {
        q: "Does Foinikas have access to my assets?",
        a: "No. Foinikas acts as a discretionary portfolio manager, but assets remain in your legal name and under your full ownership at IBIE. We manage your portfolio according to your agreed strategy without direct access to withdraw or move your funds."
      },
      {
        q: "Can I access or monitor my portfolio directly?",
        a: "Yes. You’ll have full, real-time access to your account via the Interactive Brokers platform or mobile app, where you can track holdings, performance, reports, and more—anytime, anywhere."
      }
    ],
    "Service & Offering": [
      {
        q: "What is the minimum investment required to work with Foinikas?",
        a: "Our service is designed for mass affluent investors, with a minimum of €250,000 in investable assets. This allows us to offer personalized portfolios, robust risk management, and institutional-quality service, traditionally reserved for clients with €1M+."
      },
      {
        q: "Can Foinikas manage portfolios in multiple currencies?",
        a: "Yes. We offer portfolios in multiple base currencies, including EUR, USD, GBP, and CHF. This enables better alignment with your income needs, global exposure, or future spending plans."
      },
      {
        q: "Are portfolios customized or one-size-fits-all?",
        a: "Each portfolio is tailored based on your MiFID risk profile, investment goals, and preferences. We use structured strategies like Growth, Dynamic, or Income as a foundation, but we customize allocations to ensure a strategy that reflects your needs."
      }
    ]
  };

  const toggleAccordion = (section, index) => {
    if (openItem.section === section && openItem.index === index) {
      setOpenItem({ section: null, index: null });
    } else {
      setOpenItem({ section, index });
    }
  };

  return (
    <div className='w-full max-h-[400px] rounded-[12px] backdrop-blur-[15px] flex justify-center items-center'>


      <div className='h-[80%] w-[95%] overflow-y-auto rounded-[12px]'>
        {Object.entries(faqData).map(([sectionTitle, items], sectionIdx) => (
          <div key={sectionTitle} className={`mb-6 bg-[rgba(255,255,255,0.1)] px-[20px] md:px-[40px] py-[25px] md:py-[30px] rounded-[24px] ${sectionIdx === 0? "mt-[500px]": ""} `}>
            <h2 className='tertiaryTitle mb-4 text-white text-left'

            style={{fontSize:"1.8rem"}}
            >{sectionTitle}</h2>
            {items.map((item, index) => (
              <div key={`${sectionIdx}-${index}`} className='mb-3'
                style={{
                  borderBottom: "0.1px solid rgba(217,217,217,0.5)"
                }}
              >
                <div
                  onClick={() => toggleAccordion(sectionTitle, index)}
                  className={`w-full flex justify-between items-center flex-row cursor-pointer
                            h-[40px] md:h-[50px] text-left `}
                  style={{

                    transition: "all 0.3s ease",

                  }}
                >
                  <p className={`text-[0.8rem] md:text-[1rem] text-white ${openItem.section === sectionTitle && openItem.index === index ? "font-[900]" : ""}`}
                    style={{ transition: "all 0.3s ease-in-out" }}
                  >{item.q}</p>
                  <svg
                    style={{
                      transform:
                        openItem.section === sectionTitle && openItem.index === index
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      transition: "all 0.3s ease"
                    }}
                    width="22"
                    height="12"
                    viewBox="0 0 32 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.768 0.142559C28.0591 -0.0513052 28.5399 -0.0466893 28.8378 0.151791L30.9096 1.53192C31.2075 1.7304 31.2143 2.05351 30.9231 2.24737L16.5219 11.6729C16.3729 11.7744 16.1698 11.8206 15.9734 11.8113C15.7703 11.816 15.574 11.7698 15.425 11.6729L1.02376 2.24737C0.732619 2.05351 0.73939 1.7304 1.0373 1.53192L3.10913 0.151791C3.40704 -0.0466893 3.88776 -0.0513052 4.1789 0.142559L15.9734 7.86021L27.768 0.142559Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div
                  className={` overflow-hidden text-white ${openItem.section === sectionTitle && openItem.index === index ? "h-[auto]   p-3 rounded-b-lg" : "h-[0]"
                    }`}
                  style={{ transition: "0.5s" }}
                >
                  <p className={`${openItem.section === sectionTitle && openItem.index === index ? "opacity-[1] transform translate-[0px]" : "opacity-[0] transform translate-[-10px]"}`}
                    style={{ transition: "1s" }}
                  >{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>


    </div>
  );
};

export default Accordian;
