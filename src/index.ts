import GitLabApiBase from './base';
import { ProjectApi, ProjectsApi } from './project';

/**
 * Fetcher class around invoking GitLab API calls
 */
export class GitLabApi extends GitLabApiBase {
  projects: ProjectsApi = new ProjectsApi();

  project(projectId: number | string): ProjectApi {
    return this.projects.byId(projectId);
  }
}

/**
 * Default instance
 */
const gitlab = new GitLabApi();
export default gitlab;
