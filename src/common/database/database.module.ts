import { Global, Module } from "@nestjs/common";
import { AppDataSource } from "./database.config";

@Global()
@Module({
    providers: [{
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            if (!AppDataSource.isInitialized) {
                await AppDataSource.initialize();
            }
            return AppDataSource
        },
    }],
    exports: ['DATA_SOURCE']
})
export class DatabaseModule { }