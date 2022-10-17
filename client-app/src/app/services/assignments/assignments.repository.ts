import { AssignmentPortal } from '@funle/entities';
import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities } from '@ngneat/elf-entities';


export const assignmentStore = createStore(
  { name: 'assignments' },
  withEntities<AssignmentPortal>());

let loaded = false;

export const assignments$ = assignmentStore.pipe(selectAllEntities());

export function isLoaded() {
  return loaded;
}

export function setLoaded(val: boolean) {
  loaded = val
}

export function setAssignments(assignments: AssignmentPortal[]) {
  assignmentStore.update(setEntities(assignments));
}