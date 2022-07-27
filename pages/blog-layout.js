import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Ghostly';

const Layout = () => {
  return (
    <>
      <Head>
        <title>Blog Layout</title>
      </Head>
      {/* w-screen min-h-screen flex flex-col justify-center -my-6 items-center p-4 overflow-y-scroll */}
      <div className='flex flex-col justify-center items-center p-6'>
        <header className='flex flex-col items-center'>
          <Link href='/'>
            <a>
              <Image
                priority
                src='/profile.jpg'
                className='rounded-full'
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h1 className='text-gray-700 text-4xl font-medium text-center my-6'>
            {name}
          </h1>
        </header>
        <main>
          <div>
            <div className=''>
              <p className='text-xl font-small my-3'>
                Hello, This is Ghostly. A placeholder for some text. I am the
                general of this blog. Please see associated links
              </p>
            </div>
            <div className=''>
              <p className='text-xl font-small'>
                (This is a sample website - you&apos;ll be building a site like
                this one{' '}
                <a
                  className='cursor-pointer text-blue-400 hover:text-purple-300'
                  href='https://nextjs.org/learn'
                >
                  our Next.js tutorial
                </a>
                )
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
