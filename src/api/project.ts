import { ProjectImportDto } from '../dto/project';
import GitLabApiBase from './base';
import { ProjectMemberApi, ProjectMembersApi } from './projectmember';
import { MergeRequestApi, MergeRequestsApi } from './projectmergerequest';

/**
 * /projects/:projectId API
 */
export class ProjectApi extends GitLabApiBase {
  protected projectId: number | string;

  constructor(projectId: number | string) {
    const urlSafeProjectId = typeof projectId === 'string' ? encodeURIComponent(projectId) : projectId;
    super(`/projects/${urlSafeProjectId}`);
    this.projectId = urlSafeProjectId;
  }

  /**
   * Direct
   */

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

  /**
   * Sub
   */

  mergeRequests(): MergeRequestsApi {
    return new MergeRequestsApi(this.projectId);
  }

  mergeRequest(mergeRequestIid: number): MergeRequestApi {
    return new MergeRequestApi(this.projectId, mergeRequestIid);
  }

  members(): ProjectMembersApi {
    return new ProjectMembersApi(this.projectId);
  }

  member(userId: number): ProjectMemberApi {
    return new ProjectMemberApi(this.projectId, userId);
  }
}

/**
 * /projects API
 */
export class ProjectsApi extends GitLabApiBase {
  constructor() {
    super('/projects');
  }

  import(description: ProjectImportDto): Promise<void> {
    return this.axios.post('/import', description);
  }

  byId(projectId: number | string): ProjectApi {
    return new ProjectApi(projectId);
  }
}
