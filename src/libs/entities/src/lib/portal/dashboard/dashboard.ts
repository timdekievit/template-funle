export interface IBaseDashboard {
    firstName: string;
    mainScenario: number;
    secondaryScenario: number;
}

export class BaseDashboard implements IBaseDashboard {
    firstName: string;
    mainScenario: number;
    secondaryScenario: number;

    constructor(dashboard: IBaseDashboard) {
        this.firstName = dashboard.firstName;
        this.mainScenario = dashboard.mainScenario;
        this.secondaryScenario = dashboard.secondaryScenario;
    }

}
