import { ActionNeededModel } from "./action-needed-model";
import { ClientModel } from "./client-model";
import { IssueModel } from "./issue-model";
import { MaterialModel } from "./material-model";
import { RemarksModel } from "./remarks-model";
import { StatusModel } from "./status-model";

export interface workOrder {
    id: number,
    woNumber: number,
    type: string,
    initialValue: number,
    completionPercentage: number,
    location: {
        mapLink?: string,
        street: string,
        Area: string,
        city: string,
    },
    Dates: {
        receivingDate: Date,
        createdDate: Date,
        deadlineDate?: Date,
        finishDate: Date,
    },
    client: ClientModel,
    assignedEmployeesIds?: number[],
    assignedEquipmentIds?: number[],
    status: StatusModel[],
    remarks?: RemarksModel[],
    issues?: IssueModel[],
    actionsNeeded?: ActionNeededModel[],
    materials?: MaterialModel[],




}

/* subTasksNumber: number,

 */