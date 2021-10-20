import { Readable } from 'stream';
import GitLabApiBase from './base';

export type ImportDescription = {
  namespace?: number | string;
  name?: string;
  file: Readable;
  path: string;
  overwrite?: boolean;
};

export class ProjectApi extends GitLabApiBase {
  protected projectId: number | string;

  constructor(projectId: number | string) {
    const urlSafeProjectId = typeof projectId === 'string' ? encodeURIComponent(projectId) : projectId;
    super(`/projects/${urlSafeProjectId}`);
    this.projectId = urlSafeProjectId;
  }

  async exists(): Promise<boolean> {
    try {
      await this.axios.head('');
      return true;
    } catch (error) {
      if (error?.response?.status === 404) {
        return false;
      }
      throw error;
    }
  }

  delete(): Promise<void> {
    return this.axios.delete('');
  }
}

export class ProjectsApi extends GitLabApiBase {
  constructor() {
    super('/projects');
  }

  import(description: ImportDescription): Promise<void> {
    return this.axios.post('/import', description);
  }

  byId(projectId: number | string): ProjectApi {
    return new ProjectApi(projectId);
  }
}
