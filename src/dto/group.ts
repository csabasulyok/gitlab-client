export type GroupVisibility = 'public' | 'internal' | 'private';

export type GroupDto = {
  id: number;
  name: string;
  path: string;
  description: string;
  visibility: GroupVisibility;
  web_url: string;
  full_name: string;
  full_path: string;
};

export type GroupCreateDto = {
  name: string;
  path: string;
  description?: string;
  visibility?: GroupVisibility;
  parent_id?: number;
};

export type GroupUpdateDto = {
  name?: string;
  path?: string;
  description?: string;
  visibility?: GroupVisibility;
};
