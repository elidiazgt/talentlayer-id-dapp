/* eslint-disable no-console */
import axios from 'axios';
import { SUBGRAPH_URL } from '../config/app';

const processRequest = async (query: string): Promise<any> => {
  try {
    const response = await axios.post(SUBGRAPH_URL, { query });
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUsers = (): Promise<any> => {
  const query = `
  {
    users(orderBy: id, orderDirection: desc) {
      id
      address
      uri
      handle
      withPoh
    }
  }
  `;
  return processRequest(query);
};

export const getUserById = (id: string): Promise<any> => {
  const query = `
  {
    user(id: "${id}") {
      id
      address
      uri
      handle
      withPoh
      rating
      numReviews
    }
  }
  `;
  return processRequest(query);
};

export const getJobs = (): Promise<any> => {
  const query = `
  {
    jobs(orderBy: id, orderDirection: desc) {
      id
      status
      employer {
        id
        handle
      }
      employee {
        id
        handle
      }
      sender {
        id
        handle
      }
      recipient {
        id
        handle
      }
      uri
    }
  }
  `;
  return processRequest(query);
};

export const getJob = (id: string): Promise<any> => {
  const query = `
  {
    job(id: "${id}") {
      job
    }
  }
  `;
  return processRequest(query);
};

export const getReviews = (): Promise<any> => {
  const query = `
  {
    reviews {
      id
    }
  }
  `;
  return processRequest(query);
};

export const getReviewsByJob = (jobId: string): Promise<any> => {
  const query = `
  {
    reviews(where: { job: "${jobId}" }, orderBy: id, orderDirection: desc) {
      id
      job {
        id
        status
      }
      to {
        id
        handle
      }
      uri
    }
  }
  `;
  return processRequest(query);
};

export const getReview = (id: string): Promise<any> => {
  const query = `
  {
    review(id: ${id}) {
      id
    }
  }
  `;
  return processRequest(query);
};
