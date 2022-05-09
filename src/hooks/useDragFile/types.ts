export type formatterResultType = {
  lastModified?: number;
  name?: string;
  path: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
  lastModifiedDate?: Date;
};
export type formatterType = (args: File[]) => Array<formatterResultType>;

export interface useDragFilePropsType {
  accept?: Array<string>,
  formatter?: formatterType;
  success?: (args: Array<formatterResultType> | Array<File>) => void;
}
