export type languageOptionType = {
  label: string;
  value: number;
};
export type folderTreeOptionsType = {
  path: string;
  label: string;
  isLeaf?: boolean;
  children?: folderTreeOptionsType[];
};

export interface projectType {
  id: string | number;
  name: string;
  createTime: number;
  lastModified: number;
  languages: languageOptionType[];
  folderTree: folderTreeOptionsType[];
  isGit: boolean;
  topics: string[];
  description: string
}
