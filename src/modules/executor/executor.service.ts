import { Injectable } from '@nestjs/common';
import Docker from 'dockerode'

@Injectable()
export class ExecutorService {
    private readonly docker = new Docker({ socketPath: '/var/run/docker.sock' });

    async startContainer(containerId: string): Promise<any> {
        try {
            const container = this.docker.getContainer(containerId)
            const result = await container.start()

            return result
        } catch (err) {
            throw err;
        }
    }
}
