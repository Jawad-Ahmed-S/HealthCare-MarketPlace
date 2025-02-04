import { type SchemaTypeDefinition } from 'sanity'
import Product from "../product"
import customer from "../customer"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,customer]
}
