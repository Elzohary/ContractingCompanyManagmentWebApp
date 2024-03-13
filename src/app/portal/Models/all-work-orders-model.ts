export interface workOrder {
    id: number,
    status: string,
    type: string,
    initialValue: number,
    location: string,
    receivingDate: Date,
    subTasksNumber: number,
    actionsNeeded: number,
    customer: string,
}
