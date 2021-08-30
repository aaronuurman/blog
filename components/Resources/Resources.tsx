import slugify from '@/utils/slugify'
import { ExternalLink } from '@/components/Links'
import { ResourceType } from '@/interfaces/ResourceType'
import { ResourcesType } from '@/interfaces/ResourcesType'

import classes from './resources.module.css'
import spacing from '@/styles/spacing.module.css'

const Resources = ({ resources }: ResourcesType) => {
    if (resources === null || resources.length === 0) {
        return null
    }

    return (
        <details className={[classes.resources, spacing.p_y_2].join(' ')}>
            <summary>Available resources</summary>
            <ul className={[spacing.p_t_2, spacing.p_x_1].join(' ')}>
                {resources.map((resource: ResourceType) => (
                    <li className={spacing.p_b_1} key={slugify(resource.name)}>
                        <ExternalLink title={resource.name} url={resource.url} />
                    </li>
                ))}
            </ul>
        </details>
    )
}

export default Resources
