import { useAuth } from '@auth';
import { useQuery } from '@tanstack/react-query';
import { fetchMediaItems } from './api';
import { MediaItemsResponse } from './types';

export default function useMediaItems(params?: {
  pageSize?: number;
  pageToken?: string;
}) {
  const { token } = useAuth();

  return useQuery<MediaItemsResponse, Error>(['mediaItems'], () =>
    fetchMediaItems({ ...params, token })
  );
}
