import { noChangeStrEnum } from "@/utils";

export const AMessageLevel = noChangeStrEnum("INFO", "SUCCESS", "ERROR");

export interface AMessageType {
  type: string;
  show: boolean;
  content: string;
}
