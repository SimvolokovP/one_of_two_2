export interface ITestItem {
  file: string | null;
  value: string;
}

export interface ITag {
  value: string;
}

export interface ITest {
  id: string;
  title: string;
  author: string;
  cover?: string;
  descr?: string;
  items: ITestItem[];
  isIncognito?: boolean;
  tags: ITag[];
}
