import constants from '../../constants';
import { getConstantByRegion } from '../common';
import {
  RegionIdOrName,
  Uri,
} from '../../types';

/**
 * Returns a list of all region API host uris
 *
 * @return List of all API host uris indexed by region id as array of strings.
 */
export const getAllApiHosts = () => constants.REGION_API_HOSTS;

/**
 * Returns region API host uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return Region API host uri as a string
 */
export const getApiHostByRegion = (regionIdOrName: RegionIdOrName) => {
  const apiHost = <Uri | ReadonlyArray<Uri>>getConstantByRegion(regionIdOrName, 'REGION_API_HOSTS');
  // eslint-disable-next-line no-nested-ternary
  return typeof regionIdOrName === 'string' && (regionIdOrName as string).toLowerCase() === 'kr'
    ? apiHost[0]
    : typeof regionIdOrName === 'string' && (regionIdOrName as string).toLowerCase() === 'tw'
      ? apiHost[1]
      : apiHost;
};
