import * as utils from '../../../lib/utils';

const {
  getAllRegions,
  getAllRegionIds,
  getAllRegionNames,
  getRegionNameById,
  validateRegionId,
  getRegionIdByName,
  validateRegionName,
  getAllLocales,
  getAllLocaleNames,
  getLocalesByRegionId,
  checkIfLocaleLooksValid,
  isLocaleValidForRegionId,
  validateLocale,
  getAllDefaultLocaleIndexes,
  getAllDefaultLocaleNames,
  getDefaultLocaleIndexForRegionId,
  getDefaultLocaleNameForRegionId,
  getAllSc2Realms,
  getAllAvailableSc2Realms,
  getSc2RealmsByRegionId,
  checkIfSc2RealmLooksValid,
  validateSc2Realm,
  isSc2RealmValidForRegionId,
  getAllApiHosts,
  getApiHostByRegionId,
  getApiHostByRegionName,
} = utils;

describe('utils', () => {
  test('should be defined', () => {
    expect(utils).toBeDefined();
  });

  test('should be of type "Object"', () => {
    expect(utils).toBeTruthy();
    expect(typeof utils).toBe('object');
  });

  test('should expose method getAllRegions()', () => {
    expect(getAllRegions).toBeDefined();
    expect(getAllRegions).toBeTruthy();
    expect(typeof getAllRegions).toBe('function');
  });

  test('should expose method getAllRegionIds()', () => {
    expect(getAllRegionIds).toBeDefined();
    expect(getAllRegionIds).toBeTruthy();
    expect(typeof getAllRegionIds).toBe('function');
  });

  test('should expose method getAllRegionNames()', () => {
    expect(getAllRegionNames).toBeDefined();
    expect(getAllRegionNames).toBeTruthy();
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should expose method getRegionNameById()', () => {
    expect(getRegionNameById).toBeDefined();
    expect(getRegionNameById).toBeTruthy();
    expect(typeof getRegionNameById).toBe('function');
  });

  test('should expose method validateRegionId()', () => {
    expect(validateRegionId).toBeDefined();
    expect(validateRegionId).toBeTruthy();
    expect(typeof validateRegionId).toBe('function');
  });

  test('should expose method getRegionIdByName()', () => {
    expect(getRegionIdByName).toBeDefined();
    expect(getRegionIdByName).toBeTruthy();
    expect(typeof getRegionIdByName).toBe('function');
  });

  test('should expose method validateRegionName()', () => {
    expect(validateRegionName).toBeDefined();
    expect(validateRegionName).toBeTruthy();
    expect(typeof validateRegionName).toBe('function');
  });

  test('should expose method getAllLocales()', () => {
    expect(getAllLocales).toBeDefined();
    expect(getAllLocales).toBeTruthy();
    expect(typeof getAllLocales).toBe('function');
  });

  test('should expose method getAllLocaleNames()', () => {
    expect(getAllLocaleNames).toBeDefined();
    expect(getAllLocaleNames).toBeTruthy();
    expect(typeof getAllLocaleNames).toBe('function');
  });

  test('should expose method getLocalesByRegionId()', () => {
    expect(getLocalesByRegionId).toBeDefined();
    expect(getLocalesByRegionId).toBeTruthy();
    expect(typeof getLocalesByRegionId).toBe('function');
  });

  test('should expose method checkIfLocaleLooksValid()', () => {
    expect(checkIfLocaleLooksValid).toBeDefined();
    expect(checkIfLocaleLooksValid).toBeTruthy();
    expect(typeof checkIfLocaleLooksValid).toBe('function');
  });

  test('should expose method validateLocale()', () => {
    expect(validateLocale).toBeDefined();
    expect(validateLocale).toBeTruthy();
    expect(typeof validateLocale).toBe('function');
  });

  test('should expose method getAllDefaultLocaleIndexes()', () => {
    expect(getAllDefaultLocaleIndexes).toBeDefined();
    expect(getAllDefaultLocaleIndexes).toBeTruthy();
    expect(typeof getAllDefaultLocaleIndexes).toBe('function');
  });

  test('should expose method isLocaleValidForRegionId()', () => {
    expect(isLocaleValidForRegionId).toBeDefined();
    expect(isLocaleValidForRegionId).toBeTruthy();
    expect(typeof isLocaleValidForRegionId).toBe('function');
  });

  test('should expose method getAllDefaultLocaleIndexes()', () => {
    expect(getAllDefaultLocaleIndexes).toBeDefined();
    expect(getAllDefaultLocaleIndexes).toBeTruthy();
    expect(typeof getAllDefaultLocaleIndexes).toBe('function');
  });

  test('should expose method getAllDefaultLocaleNames()', () => {
    expect(getAllDefaultLocaleNames).toBeDefined();
    expect(getAllDefaultLocaleNames).toBeTruthy();
    expect(typeof getAllDefaultLocaleNames).toBe('function');
  });

  test('should expose method getDefaultLocaleIndexForRegionId()', () => {
    expect(getDefaultLocaleIndexForRegionId).toBeDefined();
    expect(getDefaultLocaleIndexForRegionId).toBeTruthy();
    expect(typeof getDefaultLocaleIndexForRegionId).toBe('function');
  });

  test('should expose method getDefaultLocaleNameForRegionId()', () => {
    expect(getDefaultLocaleNameForRegionId).toBeDefined();
    expect(getDefaultLocaleNameForRegionId).toBeTruthy();
    expect(typeof getDefaultLocaleNameForRegionId).toBe('function');
  });

  test('should expose method getAllSc2Realms()', () => {
    expect(getAllSc2Realms).toBeDefined();
    expect(getAllSc2Realms).toBeTruthy();
    expect(typeof getAllSc2Realms).toBe('function');
  });

  test('should expose method getAllAvailableSc2Realms()', () => {
    expect(getAllAvailableSc2Realms).toBeDefined();
    expect(getAllAvailableSc2Realms).toBeTruthy();
    expect(typeof getAllAvailableSc2Realms).toBe('function');
  });

  test('should expose method getSc2RealmsByRegionId()', () => {
    expect(getSc2RealmsByRegionId).toBeDefined();
    expect(getSc2RealmsByRegionId).toBeTruthy();
    expect(typeof getSc2RealmsByRegionId).toBe('function');
  });

  test('should expose method checkIfSc2RealmLooksValid()', () => {
    expect(checkIfSc2RealmLooksValid).toBeDefined();
    expect(checkIfSc2RealmLooksValid).toBeTruthy();
    expect(typeof checkIfSc2RealmLooksValid).toBe('function');
  });

  test('should expose method validateSc2Realm()', () => {
    expect(validateSc2Realm).toBeDefined();
    expect(validateSc2Realm).toBeTruthy();
    expect(typeof validateSc2Realm).toBe('function');
  });

  test('should expose method isSc2RealmValidForRegionId()', () => {
    expect(isSc2RealmValidForRegionId).toBeDefined();
    expect(isSc2RealmValidForRegionId).toBeTruthy();
    expect(typeof isSc2RealmValidForRegionId).toBe('function');
  });

  test('should expose method getAllApiHosts()', () => {
    expect(getAllApiHosts).toBeDefined();
    expect(getAllApiHosts).toBeTruthy();
    expect(typeof getAllApiHosts).toBe('function');
  });

  test('should expose method getApiHostByRegionId()', () => {
    expect(getApiHostByRegionId).toBeDefined();
    expect(getApiHostByRegionId).toBeTruthy();
    expect(typeof getApiHostByRegionId).toBe('function');
  });

  test('should expose method getApiHostByRegionName()', () => {
    expect(getApiHostByRegionName).toBeDefined();
    expect(getApiHostByRegionName).toBeTruthy();
    expect(typeof getApiHostByRegionName).toBe('function');
  });
});
