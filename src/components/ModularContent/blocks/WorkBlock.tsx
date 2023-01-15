import { StructuredText } from 'react-datocms'
import {
  Record as StructuredTextGraphQlResponseRecord,
  StructuredText as StructuredTextGraphQlResponse,
} from 'datocms-structured-text-utils'

// Components
import { Image as DatoImage, Technology } from 'components'

// Types
import { WorkBlockRecord } from 'generated/graphql'

type Props = {
  data: WorkBlockRecord
}

export const WorkBlock = ({ data }: Props) => (
  <div>
    <h2 className='sm:text-2xl text-xl flex gap-1 justify-center mb-4'>
      {data.title}
    </h2>

    <div className='text-lg border-l border-b border-solid border-gray-300 pl-6 pb-6 rounded-bl space-y-6'>
      {data.experience.map((e, index) => (
        <div key={e.id}>
          <div>
            <h3>
              <StructuredText
                data={e.title as unknown as StructuredTextGraphQlResponse}
              />
            </h3>
            <p className='text-base text-gray-400'>{e.date}</p>
            <div className='text-base mt-2'>
              <StructuredText
                data={e.description as unknown as StructuredTextGraphQlResponse}
              />
            </div>
          </div>

          {/* If not the last element, render a border in between elements */}
          {index !== data.experience.length - 1 && (
            <div className='h-[1px] w-3/4 bg-gray-200 mt-6' />
          )}
        </div>
      ))}
    </div>
  </div>
)
