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

export enum Status {
  Intialized = 'Intialized',
  Confirmed = 'Confirmed',
  Finished = 'Finished',
  Rejected = 'Rejected',
}
