import extol from 'extol';

/**
 * Fetcher class around invoking GitLab API calls
 */
export class GitLabApi {
  /**
   * Base GitLab API URL
   * Defaul: gitlab.com API URL
   * Override by GITLAB_API_BASE env var/.env entry
   */
  @extol('https://gitlab.com/api/v4')
  gitlabApiBase: string;

  /**
   * API token used in authorization to GitLab API
   * No default, should be set.
   * Override by GITLAB_API_TOKEN env var/.env entry
   */
  @extol('https://gitlab.com/api/v4')
  gitlabApiToken: string;
}

/**
 * Default instance
 */
const gitlabApi = new GitLabApi();
export default gitlabApi;
