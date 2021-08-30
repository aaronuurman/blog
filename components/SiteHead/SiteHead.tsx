import Head from 'next/head'

import { Favicon } from '../Favicon'
import { TitleType } from '../../interfaces'

const SiteHead = ({ title }: TitleType) => {
    return (
        <Head>
            <title>{title} - Aaron Uurman</title>
            <Favicon />
        </Head>
    )
}
export default SiteHead
