import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const YourComponent = () => (
  <Image src='/public/profile.jpg' height={144} width={144} alt='Jimbo' />
);

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div className='w-screen min-h-screen flex flex-col justify-center -my-6 items-center p-4 overflow-y-scroll'>
        <h1 className='text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700'>
          First <a className='text-purple-300'>Post</a>
        </h1>
        <h2>
          <div className='hover:scale-105 duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6'>
            <div>
              <div className='text-lg text-gray-700'>TailWindCSS Test</div>
              <div className='flex'>
                <Link href='/'>
                  <p className='cursor-pointer text-sm text-blue-500 hover:text-blue-400'>
                    Back to Home &larr;
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </>
  );
};

export default FirstPost;
