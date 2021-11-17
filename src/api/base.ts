import axios, { AxiosInstance } from 'axios';
import axiosFormData from 'axios-form-data';
import extol from 'extol';
import { yallAxiosConnect } from 'yall2';

export default abstract class GitLabApiBase {
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

  /**
   * Set flag to log all requests sent by axios.
   * Can be set to boolean string, LOG_GITLAB_REQUESTS=false
   * Defaults to true.
   */
  @extol(true)
  logGitlabRequests: boolean;

  /**
   * Axios fetcher instance
   */
  protected axios: AxiosInstance;
  protected baseSuffix: string;

  constructor(baseSuffix = '') {
    this.baseSuffix = baseSuffix;
    this.axios = axios.create({
      baseURL: `${this.gitlabApiBase}${baseSuffix}`,
      headers: {
        Authorization: `Bearer ${this.gitlabApiToken}`,
      },
    });

    this.axios.interceptors.request.use(axiosFormData);
    if (this.logGitlabRequests) {
      yallAxiosConnect(this.axios);
    }
  }
}
