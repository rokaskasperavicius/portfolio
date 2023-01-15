// Components
import { AboutBlock, WorkBlock } from './blocks'

// Types
import type { ModularContentRecords } from 'types'

type Props = {
  content: ModularContentRecords
}

export const ModularContent = ({ content }: Props) => (
  <div className='space-y-20'>
    {content.map((record) => {
      switch (record._modelApiKey) {
        case 'about_block':
          return <AboutBlock key={record.id} data={record} />
        case 'work_block':
          return <WorkBlock key={record.id} data={record} />
        default:
          return null
      }
    })}
  </div>
)
