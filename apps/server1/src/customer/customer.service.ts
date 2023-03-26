import { Injectable } from "@nestjs/common";
import { Customer, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerServiceBase } from "./base/customer.service.base";
@Injectable()
export class CustomerService extends CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.CustomerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
  ): Promise<Customer> {
    args.data.comments = "This customer created in Amplication server";
    return super.create(args);
  }
}
