export type User = {
  id: string;
  handle: string;
  address: string;
  uri: string;
  withPoh: boolean;
  rating: string;
  numReviews: string;
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

export type JobDetails = {
  title: string;
  about: string;
  keywords: string;
  recipient: string;
  role: string;
};

export type Review = {
  id: string;
  job: Job;
  to: User;
  uri: string;
};

export type ReviewDetails = {
  content: string;
  rating: string;
};

export enum Status {
  Initialized = 'Initialized',
  Confirmed = 'Confirmed',
  Finished = 'Finished',
  Rejected = 'Rejected',
}
