export const AMessageLevel = Object.freeze({
  INFO: "INFO",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
});

export interface AMessageType {
  type: string;
  show: boolean;
  content: string;
}
