import constants from '../../constants';

import {
  RegionName,
  RegionIdArray,
  RegionNameArray,
  RegionIdAsNumberOrString,
} from '../../types';

/**
 * Returns a list of all available regions
 *
 * @return List of all available regions indexed by region id.
 */
export const getAllRegions = () => constants.REGIONS;

/**
 * Returns a list of all available region ids
 *
 * @return List of all available regions as flat array of numbers.
 */
export const getAllRegionIds = () => {
  const regionKeys = Object.keys(constants.REGIONS);
  return <RegionIdArray>regionKeys.map(regionKey => parseInt(regionKey, 10));
};

/**
 * Returns a list of all available region names
 *
 * @return {Array} List of all available regions as flat array of strings.
 */
export const getAllRegionNames = () => {
  const regionNames = Object.values(constants.REGIONS);
  const flattenedRegionNames = ([] as RegionNameArray).concat(...regionNames);
  return flattenedRegionNames.map((regionName: string) => regionName.toString());
};

/**
 * Returns region name(s) represented by given region id
 *
 * @param regionId Region id as integer or string
 * @return Region name represented as two-letter code (e.g. "us" for Americas)
 * or an array of regions if more than one is specified for a given region id
 */
export const getRegionNameById = (regionId: RegionIdAsNumberOrString) => {
  const regionIds = Object.keys(constants.REGIONS);
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = regionIds.includes(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getRegionNameById()`);
  }

  return constants.REGIONS[regionIdAsString];
};

/**
 * Validates region id provided as number or string
 *
 * @param regionId Region id as integer or string
 * @return true for valid region id. false for invalid region id
 */
export const validateRegionId = (regionId: RegionIdAsNumberOrString) => {
  try {
    return Boolean(getRegionNameById(regionId));
  } catch (error) {
    return false;
  }
};

/**
 * Returns region id for given region name
 *
 * @param regionName Region name
 * @return Region id as number
 */
export const getRegionIdByName = (regionName: RegionName) => {
  const regionNameLowercase = regionName.toLowerCase();
  const regions = constants.REGIONS;
  const regionKeys = Object.keys(regions);
  const regionIdArray = regionKeys.filter(key => regions[key].includes(regionNameLowercase));
  const regionId = Number(regionIdArray[0]) || false;

  if (!regionId) {
    throw new RangeError(`"${regionName}" is not a valid parameter for getRegionIdByName()`);
  }

  return regionId;
};

/**
 * Validates region name provided as string
 *
 * @param regionId Region name
 * @return true for valid region name. false for invalid region name
 */
export const validateRegionName = (regionName: RegionName) => {
  try {
    return Boolean(getRegionIdByName(regionName));
  } catch (error) {
    return false;
  }
};
