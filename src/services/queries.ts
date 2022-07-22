/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios';
import { SUBGRAPH_URL } from '../config';

const processRequest = async (query: string): Promise<any> => {
  try {
    const response = await axios.post(SUBGRAPH_URL, { query });
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getIds = (): Promise<any> => {
  const query = `
  {
    ids {
      id
    }
  }
  `;
  return processRequest(query);
};

export const getId = (id: string): Promise<any> => {
  const query = `
  {
    id(id: "${id}") {
      id
    }
  }
  `;
  return processRequest(query);
};

export const getJobs = (): Promise<any> => {
  const query = `
  {
    jobs {
      id
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
