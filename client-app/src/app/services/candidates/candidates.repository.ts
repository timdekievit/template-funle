import { CandidatePortal } from '@funle/entities';
import { createStore } from '@ngneat/elf';
// import { createRequestsStatusOperator, updateRequestStatus, withRequestsStatus } from '@ngneat/elf-requests';
import { withEntities, selectAllEntities, setEntities, updateEntities } from '@ngneat/elf-entities';


export const candidateStore = createStore(
  { name: 'candidates' },
  withEntities<CandidatePortal>());

// export const trackCandidatesRequestsStatus =  createRequestsStatusOperator(candidateStore);

let loaded = false;

export const candidates$ = candidateStore.pipe(selectAllEntities());

export function isLoaded() {
  return loaded;
}

export function setLoaded(val: boolean) {
  loaded = val
}

export function setCandidates(candidates: CandidatePortal[]) {
  candidateStore.update(setEntities(candidates));
}

export function updateCandidate(id: string, candidate: Partial<CandidatePortal>) {
  candidateStore.update(updateEntities(id, candidate));
}
