import constants from '../../constants';
import { validateRegionId } from './regions';
import { Locale, RegionIdAsNumberOrString } from '../../types';
import { RegionIdProperties } from '../../interfaces';
import { getAllLocales } from './locales';

/**
 * Returns a list of all available default locale indexes
 *
 * @return List of all available default locale indexes indexed by region id.
 */
export const getAllDefaultLocaleIndexes = () => constants.DEFAULT_LOCALES;

/**
 * Returns a default locale index for given region id
 *
 * @param regionId Region id as number or string
 * @return Index of default locale for given region id
 */
export const getDefaultLocaleIndexForRegionId = (regionId: RegionIdAsNumberOrString) => {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  /* tslint:disable no-if-statement */
  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleIndexForRegionId()`,
    );
  }
  /* tslint:enable no-if-statement */

  return constants.DEFAULT_LOCALES[regionIdAsString];
};

/**
 * Returns a default locale name for given region id
 *
 * @param regionId Region id as number or string
 * @return Name of the default locale for given region id
 */
export const getDefaultLocaleNameForRegionId = (regionId: RegionIdAsNumberOrString) => {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  /* tslint:disable no-if-statement */
  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleNameForRegionId()`,
    );
  }
  /* tslint:enable no-if-statement */

  const defaultLocaleIndex = constants.DEFAULT_LOCALES[regionIdAsString];
  return constants.LOCALES[regionId][defaultLocaleIndex];
};

/**
 * Returns a list of all available default locale names
 *
 * @return List of all available default locale names indexed by region id.
 */
export const getAllDefaultLocaleNames = () => {
  const allLocales = getAllLocales();
  const allLocaleKeys = Object.keys(allLocales);

  return <RegionIdProperties<Locale>>Object.assign(
    {},
    ...allLocaleKeys.map(regionId => ({
      [regionId]: getDefaultLocaleNameForRegionId(regionId),
    })),
  );
};
