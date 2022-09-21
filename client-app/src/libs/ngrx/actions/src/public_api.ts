import { createAction } from '@ngrx/store';

import { TYPES as CandidateTypes, actions as CandidateActions } from './candidate.actions';
// import { TYPES as AssignmentTypes, actions as AssignmentActions } from './assignment.actions';
// import { TYPES as ProposalTypes, actions as ProposalActions } from './proposal.actions';
// import { TYPES as SpecialtyTypes, actions as SpecialtyActions } from './specialty.actions';
// import { TYPES as TagTypes, actions as TagActions } from './tag.actions';
// import { TYPES as CategoryTypes, actions as CategoryActions } from './category.actions';
// import { TYPES as ActionTypes, actions as ActionActions } from './action.actions';

export const clearStateAction = createAction('CLEAR_STATE');

// export * from './helpers';

export {
  CandidateTypes,
  CandidateActions,
  // AssignmentTypes,
  // AssignmentActions,
  // ProposalTypes,
  // ProposalActions,
  // SpecialtyTypes,
  // SpecialtyActions,
  // TagActions,
  // CategoryTypes,
  // CategoryActions,
  // ActionTypes,
  // ActionActions,
};
