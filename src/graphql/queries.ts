import gql from 'graphql-tag'

// Fragments
import { AboutBlockFragment, WorkBlockFragment } from './fragments'

export const getHomePage = gql`
  query GetHomePage {
    homePage {
      id
      heroImage {
        responsiveImage(
          imgixParams: { fit: crop, w: 500, h: 650, auto: format }
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
      content {
        ...AboutBlockFragment
        ...WorkBlockFragment
      }
    }
  }

  ${AboutBlockFragment}
  ${WorkBlockFragment}
`

export const getProjects = gql`
  query GetProjects($locale: SiteLocale) {
    allProjects(locale: $locale) {
      title
      subtitle
      images {
        responsiveImage(imgixParams: { fit: crop, w: "2560", h: "1327" }) {
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
      link {
        url
      }
    }
  }
`
