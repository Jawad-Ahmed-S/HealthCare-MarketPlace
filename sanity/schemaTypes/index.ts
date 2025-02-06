import { type SchemaTypeDefinition } from 'sanity'
import Product from "../Product"
import customer from "../customer"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,customer]
}
