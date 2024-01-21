import axios from 'axios';

interface Request<BodyType> {
  endpoint: string;
  body?: BodyType;
  params?: any;
}

let api = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 30000,
});

export const httpGet = async <ResponseType = any>({
  endpoint,
  params,
}: Request<any>) => {
  const { data } = await api.get<ResponseType>(endpoint, { params });
  return data;
};

export const httpPost = async <ResponseType = any, BodyType = any>({
  endpoint,
  body,
  params,
}: Request<BodyType>) => {
  const { data } = await api.post<ResponseType>(endpoint, body, { params });
  return data;
};

export const httpDelete = async <ResponseType = any, BodyType = any>({
  endpoint,
}: Request<BodyType>) => {
  const { data } = await api.delete<ResponseType>(endpoint);
  return data;
};

export const createProviderApi = (authToken?: string) => {
  api = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 30000,
    headers: {
      Authorization: authToken,
      'content-type': 'application/json',
    },
  });
};
