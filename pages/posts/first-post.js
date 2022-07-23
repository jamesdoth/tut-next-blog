import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>First Post</h1>
      <h2>
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
          <div className='shrink-0'></div>
          <div>
            <div className='text-xl font-medium text-black'>
              TailWindCSS Test
            </div>
            <Link href='/'>
              <p className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                Home
              </p>
            </Link>
          </div>
        </div>
      </h2>
    </>
  );
};

export default FirstPost;
