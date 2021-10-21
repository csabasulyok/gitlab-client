import GitLabApiBase from './api/base';
import * as api from './api';

/**
 * Fetcher class around invoking GitLab API calls
 */
export class GitLabApi extends GitLabApiBase {
  projects: api.ProjectsApi = new api.ProjectsApi();
  groups: api.GroupsApi = new api.GroupsApi();

  project(projectId: number | string): api.ProjectApi {
    return this.projects.byId(projectId);
  }

  group(groupId: number | string): api.GroupApi {
    return this.groups.byId(groupId);
  }
}

/**
 * Default instance
 */
const gitlab = new GitLabApi();
export default gitlab;
