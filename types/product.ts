import { RouteProp } from "@react-navigation/native";

export type ProductDetailRouteProp = RouteProp<
  { "product-detail": { id: string } },
  "product-detail"
>;

export interface Product {
  id: string;
  name: string;
  price: string;
}
