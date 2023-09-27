import { Injectable } from '@nestjs/common';
import { ClockRepositoryInterface } from './clock.repository.interface';

@Injectable()
export class ClockRepository implements ClockRepositoryInterface {
    /**
     * 取得標準時間
     * @returns
     */
    private getTimeZone(): Date {
        const utcTime =
            new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
        return new Date(utcTime);
    }

    /**
     * 取得 +8 時間
     */
    getTime(): Date {
        const offset = 8 * 60; // 8小時的分鐘數
        const utcTime = this.getTimeZone().getTime(); // 使用 getTimeZone() 取得標準時間
        const localTime = new Date(utcTime + offset * 60 * 1000);
        return localTime;
    }
}