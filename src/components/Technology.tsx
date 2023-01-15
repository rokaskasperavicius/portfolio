type Props = {
  text: string
}

export const Technology = ({ text }: Props) => (
  <div className='bg-primary text-white px-2 py-1 min-w-[80px] flex items-center justify-center rounded-md flex-shrink-0'>
    {text}
  </div>
)
