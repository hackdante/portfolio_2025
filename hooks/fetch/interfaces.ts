export type DataType<T> = T | null;
export type ErrorType = Error | null

export interface ParamsFetchUI<T> {
  data: DataType<T>;
  loading: boolean;
  error: ErrorType;
}
