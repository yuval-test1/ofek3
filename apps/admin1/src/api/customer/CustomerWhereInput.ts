import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  comments?: StringNullableFilter;
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
