import { Readable } from 'stream';

export type ProjectVisibility = 'public' | 'internal' | 'private';

export type ProjectDto = {
  id: number;
  description: string;
  default_branch: string;
  archived: boolean;
  visibility: ProjectVisibility;
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  shared_runners_enabled: boolean;
};

export type ProjectImportDto = {
  namespace?: number | string;
  name?: string;
  file: Readable;
  path: string;
  overwrite?: boolean;
};
