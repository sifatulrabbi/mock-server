import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
    constructor() {}

    getHello(): string {
        return "Hello this is a mock application"
    }
}
