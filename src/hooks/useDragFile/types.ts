export type formatterResultType = {
  lastModified?: number;
  name?: string;
  path: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
  lastModifiedDate?: Date;
};
export type formatterType = (args: File[]) => formatterResultType[];

export interface useDragFilePropsType {
  formatter?: formatterType;
  success?: (args: formatterResultType | File[]) => void;
}
