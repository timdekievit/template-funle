import { Injectable } from "@angular/core";
import { PortalAssignmentService } from "@funle/api";
import { AssignmentPortal } from "@funle/entities";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { loadAssignmentAction, loadAssignmentsAction } from "./assignment.actions";

export class AssignmentStateModel {
    assignments: AssignmentPortal[]
}

@State<AssignmentStateModel>({
    name: 'Assignments',
    defaults: {
        assignments: []
    },
})

@Injectable({
    providedIn: 'root'
})

export class AssignmentState {

    private loaded = false;

    constructor(private assignmentsService: PortalAssignmentService) { }

    @Action(loadAssignmentsAction)
    loadAssignments(context: StateContext<AssignmentStateModel>) {

        console.log('action in assignmentState')
        // de return zorgt ervoor dat erop de obervable wordt gewacht tot het klaar is.
        return this.assignmentsService.getAll()
            .pipe(
                tap(assignments => {
                    console.log(assignments)
                    context.setState({
                        assignments: assignments
                    })
                })
            )
    }


    @Action(loadAssignmentAction)
    loadAssignment(context: StateContext<AssignmentStateModel>, action: loadAssignmentAction) {

        // console.log('action in assignmentState')
        // de return zorgt ervoor dat erop de obervable wordt gewacht tot het klaar is.
        return this.assignmentsService.get(action.id)
            .pipe(
                tap(assignment => {
                    console.log(assignment)

                    let state = context.getState();

                    state = {
                        ...state,
                        assignments: [...state.assignments, assignment]
                    }

                    context.setState(state);
                })
            )
    }

    isLoaded() {
        return this.loaded;
    }

    setLoaded(loaded: boolean) {
        this.loaded = loaded;
    }

    // @Selector()
    // static getAssignment(state: AssignmentStateModel) {
    //     return state.assignments.find(assignments => assignments.id == )
    // }


    @Selector()
    static getAssignments(state: AssignmentStateModel) {
        return state.assignments
    }

}