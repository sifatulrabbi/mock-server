import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("/mock-server")
    getHello(): string {
        // const ping =
        return this.appService.getHello()
    }
}
