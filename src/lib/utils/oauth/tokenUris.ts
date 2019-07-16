import constants from '../../constants';
import { RegionIdOrName, Uri } from '../../../../@types';
import { getConstantByRegion } from '../common';

/**
 * Returns a list of all OAuth token uris
 *
 * @return List of all OAuth token uris indexed by region id as array of strings.
 */
export const getAllTokenUris = () => constants.OAUTH_TOKEN_URIS;

/**
 * Returns OAuth token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth token uri as a string
 */
export const getTokenUriByRegion = (regionIdOrName: RegionIdOrName): string =>
  <Uri>getConstantByRegion(regionIdOrName, 'OAUTH_TOKEN_URIS');