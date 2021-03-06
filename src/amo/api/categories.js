/* @flow */
import { callApi } from 'amo/api';
import type { ApiState } from 'amo/reducers/api';

export type GetCategoriesParams = {| api: ApiState |};

export function getCategories({ api }: GetCategoriesParams) {
  return callApi({
    endpoint: 'addons/categories',
    apiState: api,
  });
}
