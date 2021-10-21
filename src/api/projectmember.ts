import * as dto from '../dto';
import GitLabApiBase from './base';

/**
 * /projects/:projectId/members/:memberId API
 */
export class ProjectMemberApi extends GitLabApiBase {
  protected projectId: number | string;
  protected userId: number;

  constructor(projectId: number | string, userId: number) {
    super(`/projects/${projectId}/members/${userId}`);
    this.projectId = projectId;
    this.userId = userId;
  }

  async get(): Promise<dto.MemberDto> {
    const response = await this.axios.get<dto.MemberDto>('');
    return response.data;
  }

  async put(data: dto.MemberUpdateDto): Promise<dto.MemberDto> {
    const response = await this.axios.put<dto.MemberDto>('', { data });
    return response.data;
  }

  delete(): Promise<void> {
    return this.axios.delete('');
  }
}

/**
 * /projects/:projectId/members API
 */
export class ProjectMembersApi extends GitLabApiBase {
  protected projectId: number | string;

  constructor(projectId: number | string) {
    super(`/projects/${projectId}/members`);
    this.projectId = projectId;
  }

  byId(userId: number): ProjectMemberApi {
    return new ProjectMemberApi(this.projectId, userId);
  }

  async get(): Promise<dto.MemberDto[]> {
    const response = await this.axios.get<dto.MemberDto[]>('');
    return response.data;
  }

  async all(): Promise<dto.MemberDto[]> {
    const response = await this.axios.get<dto.MemberDto[]>('/all');
    return response.data;
  }

  async post(data: dto.MemberCreateDto): Promise<dto.MemberDto> {
    const response = await this.axios.post<dto.MemberDto>('', { data });
    return response.data;
  }
}
