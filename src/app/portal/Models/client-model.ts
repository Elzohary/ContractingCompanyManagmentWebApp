import { AttachmentModel } from "./attachment-model";

export interface ClientModel {
    id: number,
    name: string,
    attachments?: AttachmentModel[],
}
