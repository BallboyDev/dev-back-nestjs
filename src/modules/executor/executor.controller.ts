import { Controller, Get, Param } from '@nestjs/common';
import { ExecutorService } from './executor.service';


@Controller('executor')
export class ExecutorController {

    constructor(private readonly service: ExecutorService) { }

    // run code
    @Get('run')
    async runCode() {
        return 'runCode'
    }

    // start
    @Get('start/:id')
    async startContainer(@Param('id') id: string) {
        return this.service.startContainer(id)

        // return `start container / ${id}`
    }

    // stop
    @Get('stop/:id')
    async stopContainer(@Param('id') id: string) {
        return `stop container / ${id}`
    }

    // status
    @Get('status/:id')
    async statusContainer(@Param('id') id: string) {
        return `status container / ${id}`
    }
}
