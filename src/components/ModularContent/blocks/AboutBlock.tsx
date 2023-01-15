import { StructuredText } from 'react-datocms'
import {
  Record as StructuredTextGraphQlResponseRecord,
  StructuredText as StructuredTextGraphQlResponse,
} from 'datocms-structured-text-utils'

// Components
import { Image as DatoImage, Technology } from 'components'

// Types
import { AboutBlockRecord } from 'generated/graphql'

type Props = {
  data: AboutBlockRecord
}

export const AboutBlock = ({ data }: Props) => (
  <div>
    <h2 className='sm:text-2xl text-xl flex gap-1 justify-center'>
      {data.title}
    </h2>
    <div className='flex justify-between gap-6 mt-4'>
      <DatoImage
        image={data.image?.responsiveImage}
        className='flex-shrink-0 self-start'
        pictureClassName='rounded'
      />
      <div className='text-lg border-r border-b border-solid border-gray-300 pr-6 flex flex-col justify-around'>
        <div className='sm:mt-4 mt-2'>
          <StructuredText data={data.description as any} />
        </div>
        <div>
          <p className='my-2'>{data.technologySuffix}</p>
          <div className='flex gap-1 flex-wrap'>
            {data.technologies.map((t) => (
              <Technology key={t.id} text={t.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
