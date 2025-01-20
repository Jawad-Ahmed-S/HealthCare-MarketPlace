
interface ProductSchemaType {
  poster: string;
  productname: string;
  Price: number;
  description: string;
  Dimensions: { height: number,
                width: number,
                depth: number};
  id:number;
}
export default ProductSchemaType;
