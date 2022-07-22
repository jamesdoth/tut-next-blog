import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const FirstPost = () => {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </h2>
        </>
    )
}

export default FirstPost

