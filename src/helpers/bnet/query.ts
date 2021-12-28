import { endpoint as validateEndpoint } from "../validators";
import { getAccessToken, validateAccessToken } from "../oauth";
import { getApiHostByRegion } from "../../utils/api";
import { fetchFromUri } from "../fetch";
import {
  BattleNetQueryOptions,
  AccessToken,
  HttpMethod,
  ResponseError,
  ErrorCode,
  ErrorResponseMessage,
} from "../../types";

const queryWithAccessToken = <T = unknown>(
  queryOptions: BattleNetQueryOptions,
  accessToken: AccessToken
): Promise<T> => {
  const { region, endpoint, options } = queryOptions;
  const { headers, params, timeout } = options;
  const validEndpoint = validateEndpoint(endpoint);
  if (!validEndpoint)
    throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region) as string;
  const requestUri = `${apiHost}${endpoint}`;
  const authHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  const fetchHeaders = {
    ...headers,
    ...authHeaders,
  };

  return fetchFromUri({
    uri: requestUri,
    method: HttpMethod.GET,
    headers: fetchHeaders,
    ...(params && { params }),
    ...(timeout && { timeout }),
  }) as Promise<T>;
};

export const query = async <T = unknown>(
  queryOptions: BattleNetQueryOptions
): Promise<T | ResponseError> => {
  const { region, accessToken } = queryOptions;
  const {
    validateAccessTokenOnEachQuery,
    refreshExpiredAccessToken,
    onAccessTokenExpired,
    onAccessTokenRefresh,
  } = queryOptions.options;

  if (validateAccessTokenOnEachQuery) {
    const invalidAccessToken = !(await validateAccessToken(
      region,
      accessToken
    ));
    if (invalidAccessToken) {
      return {
        error: ErrorResponseMessage.AccessTokenInvalid,
      };
    }
  }

  try {
    return await queryWithAccessToken<T>(queryOptions, accessToken);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === ErrorCode.NotAuthorized) {
      onAccessTokenExpired?.();
      if (refreshExpiredAccessToken) {
        const newAccessToken = await getAccessToken(queryOptions);
        onAccessTokenRefresh?.(newAccessToken);
        return queryWithAccessToken<T>(queryOptions, newAccessToken);
      }
      return Promise.resolve({
        error: ErrorResponseMessage.AccessTokenExpired,
      });
    }
    throw error;
  }
};
