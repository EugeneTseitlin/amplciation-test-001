import { StringFilter } from "../../util/StringFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  cart_id?: CartListRelationFilter;
};
