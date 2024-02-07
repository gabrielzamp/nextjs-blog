'use server';

export const Header = () => {
  return (
    <>
      <div className=' border-[#1f1f1f] bg-[#1f1f1f] px-2 lg:pt-4 prose'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <a
            href='http://localhost:3000/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/series/cropped-logo-gabriel-zamp-branco-1-1706233500.png'
              className='h-10'
              alt='Flowbite Logo'
            />
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-[#1f1f1f] dark:focus:ring-[#1f1f1f]'
            aria-controls='navbar-default'
            aria-expanded='false'
            aria-label='Open main menu'
          >
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-[#1A1A1A] dark:bg-[#1A1A1A] md:dark:bg-[#1A1A1A]'>
              {/* Navigation Links */}
              {['Home', 'About', 'Services', 'Pricing', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={item.toLowerCase()}
                    className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                    aria-current={item === 'Home' ? 'page' : undefined}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
