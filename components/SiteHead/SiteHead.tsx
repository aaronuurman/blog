import Head from 'next/head'

import { Favicon } from '@/components/Favicon'
import { TitleType } from '@/interfaces/TitleType'

const SiteHead = ({ title }: TitleType) => {
    return (
        <Head>
            <title>{title} - Aaron Uurman</title>
            <Favicon />
        </Head>
    )
}
export default SiteHead
