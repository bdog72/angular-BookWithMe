import { Injectable } from '@angular/core';
import { Booking } from '../../booking/shared/booking.model';
import * as moment from 'moment';

@Injectable()
export class HelperService {
  public getRangeOfDates(startAt, endAt) {
    // console.log('getRangeOfDates()');
    const tempDates = [];
    const mEndAt = moment(endAt);
    let mStartAt = moment(startAt);

    while (mStartAt < mEndAt) {
      tempDates.push(mStartAt.format(Booking.DATE_FORMAT));
      mStartAt = mStartAt.add(1, 'day');
    }
    tempDates.push(moment(startAt).format(Booking.DATE_FORMAT));
    tempDates.push(mEndAt.format(Booking.DATE_FORMAT));

    return tempDates;
  }
}
