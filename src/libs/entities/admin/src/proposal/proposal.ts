import { IBaseProposal, BaseProposal } from '@funle/entities';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProposal extends IBaseProposal {}

export class Proposal extends BaseProposal implements IProposal {}
