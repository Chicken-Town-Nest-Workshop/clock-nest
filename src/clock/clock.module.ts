import { Global, Module } from '@nestjs/common';
import { ClockService } from './clock.service';
import { ClockRepository } from './clock.repository';

@Global()
@Module({
    providers: [
        {
            provide: 'ClockServiceInterface',
            useClass: ClockService,
        },
        {
            provide: 'ClockRepositoryInterface',
            useClass: ClockRepository
        }
    ],
    exports: [
        {
            provide: 'ClockServiceInterface',
            useClass: ClockService,
        },
    ],
})
export class ClockModule { }