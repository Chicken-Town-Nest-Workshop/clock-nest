import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClockModule } from './clock/clock.module';

@Module({
  imports: [ClockModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
