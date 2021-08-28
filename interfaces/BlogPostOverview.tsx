import { Slug } from './Slug'
import { Tags } from './Tags'
import { Image } from './Image'
import { Title } from './Title'
import { DateString } from './Date'
import { Overview } from './Overview'
import { TimeToRead } from './TimeToRead'

export interface BlogPostOverview extends DateString, TimeToRead, Tags, Slug, Title, Overview, Image {}
