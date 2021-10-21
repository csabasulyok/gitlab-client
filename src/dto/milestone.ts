export type MilestoneType = 'active' | 'closed';

export type MilestoneDto = {
  id: number;
  iid: number;
  title: string;
  state: MilestoneType;
  web_url: string;
};
