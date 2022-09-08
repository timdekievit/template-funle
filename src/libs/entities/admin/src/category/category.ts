import { BaseCategory, IBaseCategory } from "@funle/entities";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICategory extends IBaseCategory {}

export class Category extends BaseCategory implements ICategory {}
