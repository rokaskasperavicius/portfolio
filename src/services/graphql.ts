import { DocumentNode } from 'graphql'
import { GraphQLClient } from 'graphql-request'

// Config
import { DATOCMS_API_BASE, DATOCMS_API_TOKEN } from 'config/constants'

type Props = {
  query: DocumentNode
  variables?: Record<string, any> | undefined
  preview?: boolean
}

export function request({ query, variables, preview }: Props) {
  const endpoint = preview ? `${DATOCMS_API_BASE}/preview` : DATOCMS_API_BASE

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${DATOCMS_API_TOKEN}`,
    },
  })

  return client.request(query, variables)
}
