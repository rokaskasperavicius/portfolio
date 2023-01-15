import gql from 'graphql-tag'

export const AboutBlockFragment = gql`
  fragment AboutBlockFragment on AboutBlockRecord {
    _modelApiKey
    id
    title
    image {
      responsiveImage(
        imgixParams: { fit: crop, w: 250, h: 325, auto: format }
      ) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    description {
      value
    }
    technologySuffix
    technologies {
      id
      title
    }
  }
`

export const WorkBlockFragment = gql`
  fragment WorkBlockFragment on WorkBlockRecord {
    _modelApiKey
    id
    title
    experience {
      id
      title {
        value
      }
      date
      description {
        value
      }
    }
  }
`
