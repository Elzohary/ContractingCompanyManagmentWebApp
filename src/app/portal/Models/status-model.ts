export interface StatusModel {
    id: string,
    name: string,
    assignDate: Date,
    finishDate: Date,
    subWo_TaskId?: string,
    workOrderId: string
}