import Link from 'next/link'

import { TagsType } from '../../interfaces'
import slugify from '../../utils/slugify'
import { camelize } from '../../utils/string-helper'

import classes from './tags.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props extends TagsType {}

const Tags = ({ tags }: Props) => {
    if (tags === undefined || tags.length === 0) {
        return null
    }

    return (
        <div className={[classes.tags]}>
            {tags.sort().map((tag, index) => (
                <Link key={index} href={`/tag/${slugify(tag)}`}>
                    <div className={[classes[slugify(tag)], spacing.p_l_2, spacing.p_r_08, spacing.p_y_04].join(' ')}>
                        {tag}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Tags
