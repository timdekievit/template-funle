import { Injectable } from "@angular/core";
import { PortalAssignmentService } from "@funle/api";
import { AssignmentPortal } from "@funle/entities";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { loadAssignmentsAction } from "./assignment.actions";

export class AssignmentStateModel {
    assignments: AssignmentPortal[]
}

@State<AssignmentStateModel>({
    name: 'Assignments',
    defaults: {
        assignments: []
    },
})

@Injectable()
export class AssignmentState {

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


    @Selector()
    static getAssignments(state: AssignmentStateModel) {
        return state.assignments
    }

}