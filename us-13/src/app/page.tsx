import { Inter } from 'next/font/google';
import styles from './styles.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const bgBlur =
    "bg-[url('https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/series/vector-8-1-1706233791.png')] bg-contain bg-top bg-no-repeat";

  return (
    <>
      <div className={`w-full `}>
        <div className='w-full'>
          <div className={`mt-16 `}>
            <div
              className={`z-[-1] flex w-full flex-col items-center  bg-contain bg-top bg-no-repeat before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full  before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20   after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#0141ff] after:opacity-40 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]`}
            >
              <div className='mb-16 xl:mb-20 '>
                <h1 className='font-syne px-4 text-center text-4xl font-bold text-white md:mx-auto md:w-11/12 lg:text-7xl xl:w-7/12 xl:text-8xl '>
                  Drive&nbsp;
                  <span className='underline-offset-3 underline lg:underline-offset-4'>
                    more revenue
                  </span>
                  &nbsp;with PPC and SEO
                </h1>
              </div>
              <button className='h-14 w-60 rounded-full bg-[#FF9142] text-xs font-semibold uppercase tracking-widest text-white shadow-sm hover:opacity-70 xl:shadow-lg'>
                Explore works <i className='fas fa-arrow-right pl-2' />
              </button>
              {/*Companies I worked for*/}
              <div className='font-syne mt-9 flex flex-col text-white'>
                <p className='mx-auto mb-3 mb-5 text-center text-xs font-medium md:text-sm'>
                  Some companies I worked with:
                </p>
                <div className=' grid grid-cols-2   md:my-2 md:flex md:items-center md:gap-4'>
                  <img
                    className='h-4'
                    src='https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/series/image-2-1706234499.png'
                    alt=''
                  />
                  <img
                    className='h-4'
                    src='https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/series/image-3-1706234464.png'
                    alt=''
                  />
                  <img
                    className='col-span-2 mx-auto mt-4 h-4 md:p-0'
                    src='https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/series/image-4-1706234431.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center lg:py-10'>
            <div className='mx-auto mb-8 mt-16 flex w-10/12 flex-col items-center justify-center text-center lg:flex-row-reverse lg:items-start lg:justify-start xl:items-center'>
              <img
                src='https://guiadeestudo.com.br/img/gabriel%20image%20(1).png'
                className=' w-full xl:block xl:w-11/12'
                alt=''
              />
              <div
                className={`${bgBlur} flex flex-col items-center bg-center lg:items-start lg:justify-start`}
              >
                <h1
                  className={`mb-4 mt-10 text-3xl font-semibold text-white md:text-center lg:self-start lg:text-left xl:w-10/12 xl:text-5xl`}
                >
                  Let’s get know one another...
                </h1>
                <p
                  className={`${inter.className} font-rubik prose mb-4 text-base text-white md:w-10/12 md:text-center lg:text-left`}
                >
                  I'm a Brazil-based digital marketeer and developer focused on
                  scaling digital business.
                </p>
                <p
                  className={`${inter.className} font-rubik prose text-base text-white md:w-10/12 md:text-center lg:text-left`}
                >
                  I helped companies from US, EU, and BR to generate +1M dollars
                  in revenue and +5M users via Paid Media and SEO strategies and
                  tactics in the last 8 years.
                </p>
                <button className='mx-auto my-10 h-12 w-60 rounded-full bg-[#FF9142] text-xs font-semibold uppercase tracking-widest text-white shadow-sm lg:mx-0 lg:justify-start lg:self-start'>
                  Explore Works <i className='fas fa-arrow-right pl-2' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Hero end*/}
        {/*My Projects*/}
        <div className='mx-auto mt-10 flex w-11/12 flex-col items-center justify-center lg:w-full xl:mt-12 xl:w-11/12'>
          <h1
            className={`font-syne underline-offset-3 mx-4 mb-6 text-center text-3xl font-bold text-white  lg:pb-4 lg:text-6xl `}
          >
            My Projects Highlights
          </h1>
          <div
            className={`mx-auto w-full pt-8 md:w-10/12 lg:flex lg:w-full lg:justify-between `}
          >
            <div className='mx-auto w-full flex-1 py-5 md:w-11/12'>
              <div className='mx-auto w-full justify-between p-2 lg:w-10/12'>
                <img
                  className='mx-auto w-full'
                  src='https://guiadeestudo.com.br/img/image%209.png'
                  alt=''
                />
                <div className='mb-5 mt-8 flex items-center justify-between lg:justify-start'>
                  <p className='font-syne font-customweight pr-8 text-xl lg:pr-4'>
                    Lead Startup Operation
                  </p>
                  <div className='h-[1px] w-14 bg-[#FF9142] lg:w-10' />
                </div>
                <div className={`${inter.className}  flex flex-col `}>
                  <div className='mb-0.5 flex'>
                    <p className='mr-9 text-white'>Firm:</p>
                    <p>Wishpond</p>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-3 text-white'>Position:</p>
                    <p>Marketing Manager</p>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-9 text-white'>Work:</p>
                    <div className='flex gap-4'>
                      <p>Marketing,</p>
                      <p>Product</p>
                    </div>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-3 text-white'>Country:</p>
                    <p>Canada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto mb-5 w-full flex-1 py-5 md:w-11/12'>
              <div className='mx-auto w-full justify-between p-2 lg:w-10/12'>
                <img
                  className='mx-auto w-full'
                  src='https://guiadeestudo.com.br/img/Paste%20Img%20Here%20(2).png'
                  alt=''
                />
                <div className='mb-5 mt-8 flex items-center justify-between lg:justify-start'>
                  <p className='font-syne pr-8 text-xl lg:pr-4'>
                    Google Ads for EdTech
                  </p>
                  <div className='h-[1px] w-20 bg-[#FF9142] lg:w-10' />
                </div>
                <div className={`${inter.className}  flex flex-col `}>
                  <div className='mb-0.5 flex'>
                    <p className='mr-9 text-white'>Firm:</p>
                    <p>SuperSummary</p>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-3 text-white'>Position:</p>
                    <p>Consultant</p>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-9 text-white'>Work:</p>
                    <div className='flex gap-3'>
                      <p>Google Ads,</p>
                    </div>
                  </div>
                  <div className='mb-0.5 flex'>
                    <p className='mr-3 text-white'>Country:</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='my-4 h-14 w-60 rounded-full border border-[#FF9142] text-xs font-semibold uppercase tracking-widest text-[#FF9142] shadow-sm xl:mt-10'>
            More projects <i className='fas fa-arrow-right pl-2' />
          </button>
        </div>
        {/*My Projects end*/}
        {/*Testmonials start*/}
        <div
          className={`container mx-5 my-6 flex w-11/12 flex-col items-center py-4 md:mx-auto md:my-16 md:w-8/12 lg:w-11/12`}
        >
          <div className="mx-4 flex h-20 w-11/12 items-center bg-[url('https://guiadeestudo.com.br/img/aspas.png')] bg-contain bg-right bg-no-repeat ">
            <h1 className='font-syne text-3xl font-bold xl:text-5xl '>
              Testimonials
            </h1>
          </div>
          <div className='align-start flex w-11/12 flex-col'>
            <p className='my-4 xl:w-9/12 xl:text-lg'>
              “Aaronn was fantastic to work with from start to finish. We were
              looking for a simple, stand-out logo and he delivered. I tried
              designing the logo myself thinking I wouldn’t need to pay the
              money for a professional graphic designer but I was very wrong.
              Working with Aaronn was worth every penny and was surprisingly
              affordable! ”
            </p>
            <p className='font-syne text-2xl font-bold'>-Martin lee</p>
          </div>
        </div>
      </div>
    </>
  );
}
