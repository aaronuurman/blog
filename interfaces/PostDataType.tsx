import { DateType } from '@/interfaces/DateType'
import { SlugType } from '@/interfaces/SlugType'
import { TagsType } from '@/interfaces/TagsType'
import { ImageType } from '@/interfaces/ImageType'
import { TitleType } from '@/interfaces/TitleType'
import { OverviewType } from '@/interfaces/OverviewType'
import { PublishedType } from '@/interfaces/PublishedType'
import { ResourcesType } from '@/interfaces/ResourcesType'
import { TimeToReadType } from '@/interfaces/TimeToReadType'
import { ImageAuthorType } from '@/interfaces/ImageAuthorType'
import { ImageProviderType } from '@/interfaces/ImageProviderType'

export interface PostDataType
    extends DateType,
        TimeToReadType,
        TagsType,
        SlugType,
        TitleType,
        OverviewType,
        ImageType,
        ResourcesType,
        ImageAuthorType,
        ImageProviderType,
        PublishedType {}
