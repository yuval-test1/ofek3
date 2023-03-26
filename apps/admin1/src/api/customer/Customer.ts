import { Event } from "../event/Event";

export type Customer = {
  comments: string | null;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
