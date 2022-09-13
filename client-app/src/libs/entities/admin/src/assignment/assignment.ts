import { IBaseAssignment, BaseAssignment } from '@funle/entities';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAssignment extends IBaseAssignment {}

export class Assignment extends BaseAssignment implements IAssignment {}
