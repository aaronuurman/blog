import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from 'next/link'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Component {...pageProps} />
        </div>
    )
}
export default MyApp
