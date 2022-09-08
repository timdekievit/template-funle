import moment from 'moment';
import { IBaseCandidate, BaseCandidate } from '@funle/entities';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICandidate extends IBaseCandidate {}

export class Candidate extends BaseCandidate implements ICandidate {
  get needsActivation(): boolean {
    return !(this.activated || Boolean(this.hours));
  }

  get needsContact(): boolean {
    if (this.contacted) return false;
    return this.searching && Math.ceil(moment().diff(this.contactDate, 'days', true)) >= 0;
  }

  // get complete(): boolean {
  //   return this.name !== undefined && this.firstName !== undefined &&
  //          this.email !== undefined && this.fileName !== undefined &&
  //          this.specialties.length > 0 && this.rate !== 0 &&
  //          this.role !== undefined && this.hours !== 0;
  // }
}
