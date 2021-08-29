import { DateType } from './DateType'
import { SlugType } from './SlugType'
import { TagsType } from './TagsType'
import { TitleType } from './TitleType'
import { ImageType } from './ImageType'
import { OverviewType } from './OverviewType'
import { TimeToReadType } from './TimeToReadType'

export interface PostOverviewType
    extends DateType,
        TimeToReadType,
        TagsType,
        SlugType,
        TitleType,
        OverviewType,
        ImageType {}
