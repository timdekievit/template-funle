import { IBaseCandidate, BaseCandidate } from '@funle/entities';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICandidate extends IBaseCandidate {}

export class Candidate extends BaseCandidate implements ICandidate {}
