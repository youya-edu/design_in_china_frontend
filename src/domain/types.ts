export interface Page {
  idx: number;
  // This can be a number or ..., so use string.
  pageContent: string;
  selected: boolean;
  disabled: boolean;
}
