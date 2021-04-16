export enum StatusCode {
  /**
   * 2xx codes
   */
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  /**
   * 4xx codes
   */
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,

  /**
   * 5xx codes
   */
  INTERNAL_SERVER_ERROR = 500,
}
