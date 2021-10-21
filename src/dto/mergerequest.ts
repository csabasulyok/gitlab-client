import { MilestoneDto } from './milestone';
import { UserDto } from './user';

export type MergeRequestState = 'opened' | 'closed' | 'locked' | 'merged';

export type MergeRequestDto = {
  id: number;
  iid: number;
  title: string;
  state: MergeRequestState;
  source_branch: string;
  target_branch: string;
  milestone: MilestoneDto;
  author: UserDto;
  assignee: UserDto;
  reviewer: UserDto;
  web_url: string;
};

export type MergeRequestFilterParams = {
  state?: MergeRequestState;
  milestone?: string;
  source_branch?: string;
  target_branch?: string;
};

export type MergeRequestCreateDto = {
  source_branch: string;
  target_branch: string;
  title: string;
  milestone_id?: number;
  remove_source_branch?: boolean;
  assignee_id?: number;
  reviewer_id?: number;
};

export type MergeRequestUpdateDto = {
  target_branch?: string;
  title?: string;
  milestone_id?: number;
  remove_source_branch?: boolean;
  assignee_id?: number;
  reviewer_id?: number;
};

export type MergeRequestMergeDto = {
  merge_commit_message?: string;
  should_remove_source_branch?: boolean;
  merge_when_pipeline_succeeds?: boolean;
};
