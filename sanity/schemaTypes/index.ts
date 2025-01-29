import { type SchemaTypeDefinition } from 'sanity'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [startup],
}
