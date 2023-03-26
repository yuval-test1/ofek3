import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
