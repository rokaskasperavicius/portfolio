import { Image as DatoImage, ResponsiveImageType } from 'react-datocms'

type Props = {
  image: ResponsiveImageType | null | undefined
  className?: string
  pictureClassName?: string
}

export const Image = ({ className, pictureClassName, image }: Props) => {
  if (!image) return null

  return (
    <DatoImage
      usePlaceholder={false}
      data={image}
      className={className}
      pictureClassName={pictureClassName}
    />
  )
}
