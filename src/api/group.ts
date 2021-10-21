import * as dto from '../dto';
import GitLabApiBase from './base';

/**
 * /groups/:groupId API
 */
export class GroupApi extends GitLabApiBase {
  protected groupId: number | string;

  constructor(groupId: number | string) {
    super(`/groups/${groupId}`);
    this.groupId = groupId;
  }

  async get(): Promise<dto.GroupDto> {
    const response = await this.axios.get<dto.GroupDto>('');
    return response.data;
  }

  async put(data: dto.GroupUpdateDto): Promise<dto.GroupDto> {
    const response = await this.axios.put<dto.GroupDto>('', { data });
    return response.data;
  }

  delete(): Promise<void> {
    return this.axios.delete('');
  }

  async subgroups(): Promise<dto.GroupDto[]> {
    const response = await this.axios.get<dto.GroupDto[]>('/subgroups');
    return response.data;
  }

  async projects(): Promise<dto.ProjectDto[]> {
    const response = await this.axios.get<dto.ProjectDto[]>('/projects');
    return response.data;
  }
}

/**
 * /groups API
 */
export class GroupsApi extends GitLabApiBase {
  constructor() {
    super('/groups');
  }

  byId(groupId: number | string): GroupApi {
    return new GroupApi(groupId);
  }

  async get(): Promise<dto.GroupDto[]> {
    const response = await this.axios.get<dto.GroupDto[]>('');
    return response.data;
  }

  async post(data: dto.GroupCreateDto): Promise<dto.GroupDto> {
    const response = await this.axios.post<dto.GroupDto>('', { data });
    return response.data;
  }
}
