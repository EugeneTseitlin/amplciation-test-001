import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyCustomerServiceBase } from "./base/myCustomer.service.base";

@Injectable()
export class MyCustomerService extends MyCustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
