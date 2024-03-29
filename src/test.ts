import gql from "graphql-tag";
//24875024
//7701728
export const MyQuery = gql`
  query MyQuery {
    allUploads(filter: { id: { eq: "24875024" } }) {
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
  }
`;

export const MyQuery1 = gql`
  query MyQuery1 {
    allUploads(filter: { id: { eq: "24875464" } }) {
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
  }
`;

export const GetProductsQuery = gql`
  query GetProductsQuery($locale: SiteLocale) {
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
`;
