import { Test, TestingModule } from '@nestjs/testing';
import { ClockService } from './clock.service';
import { ClockRepository } from './clock.repository';
import { ClockRepositoryInterface } from './clock.repository.interface';

describe('ClockService', () => {
  let service: ClockService;
  let clockRepo: ClockRepositoryInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClockService,
        {
          provide: 'ClockRepositoryInterface',
          useClass: ClockRepository
        }],
    }).compile();

    service = module.get<ClockService>(ClockService);
    clockRepo = module.get<ClockRepositoryInterface>('ClockRepositoryInterface');
  });

  it('get chicken date time', () => {

    const result = new Date();
    result.setFullYear(2023);
    result.setMonth(8); // 月份是從零開始
    result.setDate(28);
    result.setHours(17);
    result.setMinutes(0);
    result.setSeconds(0);

    jest.spyOn(clockRepo, 'getTime').mockImplementation(() => result);

    const actual = service.getDateTime();

    expect(actual).toBeInstanceOf(result);
  });
});
