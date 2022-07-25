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
      <div className='max-w-lg p-4 mx-12 my-32'>
        <h1 className='text-3xl font-bold underline'>First Post</h1>
        <h2>
          <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
            <div className='shrink-0'></div>
            <div>
              <div className='text-xl font-medium text-black'>
                TailWindCSS Test
              </div>
              <div className='flex'>
                <Link href='/'>
                  <p>Home</p>
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
