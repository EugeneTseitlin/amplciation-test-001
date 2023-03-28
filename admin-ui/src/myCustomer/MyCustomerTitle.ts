import { MyCustomer as TMyCustomer } from "../api/myCustomer/MyCustomer";

export const MYCUSTOMER_TITLE_FIELD = "id";

export const MyCustomerTitle = (record: TMyCustomer): string => {
  return record.id || String(record.id);
};
