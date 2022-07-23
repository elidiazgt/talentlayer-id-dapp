export type User = {
  id: string;
  handle: string;
  address?: string;
  uri?: string;
  withPoh?: boolean;
};

export type Job = {
  id: string;
  status: string;
  employer: User;
  employee: User;
  sender: User;
  recipient?: User;
  uri?: string;
};

export type Review = {
  id: string;
  job: Job;
  to: User;
  uri: string;
};

export enum Status {
  Intialized = 'Intialized',
  Confirmed = 'Confirmed',
  Finished = 'Finished',
  Rejected = 'Rejected',
}
