import { IBaseSpecialty, BaseSpecialty } from '@funle/entities';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISpecialty extends IBaseSpecialty {}

export class Specialty extends BaseSpecialty implements ISpecialty {}
