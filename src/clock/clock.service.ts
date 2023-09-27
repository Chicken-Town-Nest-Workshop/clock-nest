import { Injectable, Inject } from '@nestjs/common';
import { ClockServiceInterface } from './clock.service.interface';
import { ClockRepositoryInterface } from './clock.repository.interface';

@Injectable()
export class ClockService implements ClockServiceInterface {

    constructor(
        @Inject('ClockRepositoryInterface')
        private readonly clockRepo: ClockRepositoryInterface
    ) { }

    getDateTime(): Date {
        return this.clockRepo.getTime();
    }
}
