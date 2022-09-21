import { Action, ActionReducer, State } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { clearStateAction } from '@funle/ngrx/actions'

import * as fromCandidate from './candidate.reducer';
// import * as fromAssignment from './assignment.reducer';
// import * as fromProposal from './proposal.reducer';
// import * as fromSpecialty from './specialty.reducer';
// import * as fromTag from './tag.reducer';
// import * as fromCategory from './category.reducer';
// import * as fromAction from './action.reducer';

export function clearStateReducer(reducer: ActionReducer<unknown>) {
  return (state: State<unknown>, action: Action) => {
    of(action)
      .pipe(ofType(clearStateAction), take(1))
      .subscribe(() => (state = undefined));

    return reducer(state, action);
  };
}

// export * from './helpers';

export { fromCandidate };
