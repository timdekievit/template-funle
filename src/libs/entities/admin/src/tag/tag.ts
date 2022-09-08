import { BaseTag, IBaseTag } from "@funle/entities";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITag extends IBaseTag {}

export class Tag extends BaseTag implements ITag {}
