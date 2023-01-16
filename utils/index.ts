import { gql } from "graphql-request";

export const fetchNews = async (
  category?: Category | null,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query myQuery($access_key: String! $categories:String! $keywords:String) {
      myQuery(access_key:$access_key categories:$categories keywords:$keywords countries:"us" sort:"published_desc") {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
};
