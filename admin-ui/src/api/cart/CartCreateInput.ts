import { ProductCreateNestedManyWithoutCartsInput } from "./ProductCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  products?: ProductCreateNestedManyWithoutCartsInput;
};
