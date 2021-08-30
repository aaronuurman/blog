import slugify from '@/utils/slugify'
import { ExternalLink } from '@/components/Links'
import { ResourceType } from '@/interfaces/ResourceType'
import { ResourcesType } from '@/interfaces/ResourcesType'

import classes from './resources.module.css'
import spacing from '@/styles/spacing.module.css'

const Resource = ({ resource }: ResourceType) => {
    return (
        <li className={spacing.p_b_1}>
            <ExternalLink title={resource[1]} url={resource[0]} />
        </li>
    )
}

const Resources = ({ resources }: ResourcesType) => {
    if (resources === null || resources.length === 0) {
        return null
    }
    return (
        <details className={[classes.resources, spacing.p_y_2].join(' ')}>
            <summary>Available resources</summary>
            <ul className={[spacing.p_t_2, spacing.p_x_1].join(' ')}>
                {resources.map((resource: ResourceType) => (
                    <Resource resource={resource} key={slugify(resource[1])} />
                ))}
            </ul>
        </details>
    )
}

export default Resources
