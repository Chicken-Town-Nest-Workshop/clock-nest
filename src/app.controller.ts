import { Controller, Get, Inject } from '@nestjs/common';
import { ClockServiceInterface } from './clock/clock.service.interface';

@Controller()
export class AppController {
  constructor(
    @Inject('ClockServiceInterface')
    private readonly clockService: ClockServiceInterface) { }

  @Get()
  getTownDateTime(): string {
    const date = this.clockService.getDateTime();
    return date;
  }
}
