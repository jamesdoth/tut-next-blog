import Link from 'next/link'

const FirstPost = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">First Post</h1>
            <h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </h2>
        </>
    )
}

export default FirstPost

