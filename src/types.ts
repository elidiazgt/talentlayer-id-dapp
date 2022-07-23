export type User = {
  id: string;
  address?: string;
  handle: string;
  uri?: string;
  withPoh?: boolean;
};

export type Job = {
  id: string;
  status: string;
  employer: User;
  employee: User;
  sender: User;
  recipient: User;
  uri: string;
};
