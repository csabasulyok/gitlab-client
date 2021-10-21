import * as dto from '../dto';
import GitLabApiBase from './base';

/**
 * /projects/:projectId/merge_requests/:merge_request_iid API
 */
export class MergeRequestApi extends GitLabApiBase {
  protected projectId: number | string;
  protected mergeRequestIid: number;

  constructor(projectId: number | string, mergeRequestIid: number) {
    super(`/projects/${projectId}/merge_requests/${mergeRequestIid}`);
    this.projectId = projectId;
    this.mergeRequestIid = mergeRequestIid;
  }

  async get(): Promise<dto.MergeRequestDto> {
    const response = await this.axios.get<dto.MergeRequestDto>('');
    return response.data;
  }

  async put(data: dto.MergeRequestUpdateDto): Promise<dto.MergeRequestDto> {
    const response = await this.axios.put<dto.MergeRequestDto>('', { data });
    return response.data;
  }

  delete(): Promise<void> {
    return this.axios.delete('');
  }

  async merge(data: dto.MergeRequestMergeDto): Promise<dto.MergeRequestDto> {
    const response = await this.axios.put<dto.MergeRequestDto>('/merge', { data });
    return response.data;
  }

  async cancel(): Promise<dto.MergeRequestDto> {
    const response = await this.axios.post<dto.MergeRequestDto>('/cancel_merge_when_pipeline_succeeds');
    return response.data;
  }
}

/**
 * /projects/:projectId/merge_requests API
 */
export class MergeRequestsApi extends GitLabApiBase {
  protected projectId: number | string;

  constructor(projectId: number | string) {
    super(`/projects/${projectId}/merge_requests`);
    this.projectId = projectId;
  }

  byId(mergeRequestIid: number): MergeRequestApi {
    return new MergeRequestApi(this.projectId, mergeRequestIid);
  }

  async get(params: dto.MergeRequestFilterParams = {}): Promise<dto.MergeRequestDto[]> {
    const response = await this.axios.get<dto.MergeRequestDto[]>('', { params });
    return response.data;
  }

  async post(data: dto.MergeRequestCreateDto): Promise<dto.MergeRequestDto> {
    const response = await this.axios.post<dto.MergeRequestDto>('', { data });
    return response.data;
  }
}
