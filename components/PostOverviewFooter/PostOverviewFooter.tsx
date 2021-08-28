import { DateType, TimeToReadType } from '../../interfaces'

import spacing from '../../styles/spacing.module.css'
import classes from './postOverviewFooter.module.css'

interface Props extends DateType, TimeToReadType {}

const PostOverviewFooter = ({ date, timeToRead }: Props) => {
    const minutesText: string = timeToRead === 1 ? 'minute' : 'minutes'
    return (
        <div className={[classes.post_overview_footer, spacing.p_1, spacing.m_t_2].join(' ')}>
            <div>{date}</div>
            <div>
                {timeToRead} {minutesText} to read
            </div>
        </div>
    )
}

export default PostOverviewFooter
