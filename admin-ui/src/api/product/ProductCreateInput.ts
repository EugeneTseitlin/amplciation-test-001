import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  cart_id?: CartCreateNestedManyWithoutProductsInput;
};
