export type UserState = 'active' | 'blocked';

export type UserDto = {
  id: number;
  name: string;
  username: string;
  state: UserState;
  web_url: string;
};

export type AccessLevel = 0 | 5 | 10 | 20 | 30 | 40 | 50;

export type MemberDto = UserDto & {
  access_level: AccessLevel;
};

export type MemberCreateDto = {
  user_id: number;
  access_level: AccessLevel;
};

export type MemberUpdateDto = {
  user_id: number;
  access_level: AccessLevel;
};
