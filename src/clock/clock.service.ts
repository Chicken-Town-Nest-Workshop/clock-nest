import { Injectable } from '@nestjs/common';
import { ClockServiceInterface } from './clock.service.interface';

@Injectable()
export class ClockService implements ClockServiceInterface {
    getDateTime(): Date {
        throw new Error('Method not implemented.');
    }
}
