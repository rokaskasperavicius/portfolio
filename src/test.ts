import gql from "graphql-tag";

export const MyQuery = gql`
  query MyQuery {
    allUploads(filter: { id: { eq: "7701728" } }) {
      responsiveImage(
        imgixParams: { fit: crop, w: 500, h: 600, auto: format }
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
  query GetProductsQuery {
    allProjects {
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
    }
  }
`;
