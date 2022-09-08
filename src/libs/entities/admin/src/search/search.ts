import { BaseSearch, IBaseSearch } from "@funle/entities";

export interface ISearch extends IBaseSearch {}

export class Search extends BaseSearch implements ISearch {}