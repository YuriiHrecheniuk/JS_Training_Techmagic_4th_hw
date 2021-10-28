import {IShow} from './show.interface';

export interface IResults {
  results: IShow[];
  total_pages?: number;
}

export interface IResultsIds {
  ids: number[];
  total_pages: number;
}
