export const enum AMessageLevel {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface AMessageType {
  type: string;
  show: boolean;
  content: string;
}
