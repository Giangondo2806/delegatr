import { ApiProperty } from '@nestjs/swagger';
import addMilliseconds from 'date-fns/addMilliseconds';
import parse from 'date-fns/parse';
import ms from 'ms';

export class TokenResultVm {
  @ApiProperty()
  token: string;
  @ApiProperty({ type: String, format: 'date-time' })
  expiry: Date;

  computeExpiry(jwtExpired: string) {
    const milli = ms(jwtExpired);
    const now = Date.now();
    this.expiry = new Date(
      addMilliseconds(now, milli)
    );
  }
}
