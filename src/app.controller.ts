import { Controller, Get } from '@nestjs/common';
import { ClockService } from './clock/clock.service';

@Controller()
export class AppController {
  constructor(private readonly clockService: ClockService) { }

  @Get()
  getTownDateTime(): Date {
    return this.clockService.getDateTime();
  }
}
