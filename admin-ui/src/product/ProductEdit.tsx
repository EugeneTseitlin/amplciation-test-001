import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="my_cart.id" reference="Cart" label="my_cart">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
