import { Module } from "@nestjs/common";
import { MyCustomerModuleBase } from "./base/myCustomer.module.base";
import { MyCustomerService } from "./myCustomer.service";
import { MyCustomerController } from "./myCustomer.controller";
import { MyCustomerResolver } from "./myCustomer.resolver";

@Module({
  imports: [MyCustomerModuleBase],
  controllers: [MyCustomerController],
  providers: [MyCustomerService, MyCustomerResolver],
  exports: [MyCustomerService],
})
export class MyCustomerModule {}
