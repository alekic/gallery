export type MediaItemsResponse = {
  mediaItems: MediaItem[];
  nextPageToken?: string;
};

export type MediaItem = {
  id: string;
  baseUrl: string;
  contributorInfo?: ContributorInfo;
  description?: string;
  filename: string;
  mediaMetadata: PhotoMetadata | VideoMetadata;
  mimeType: string;
  productUrl: string;
};

type ContributorInfo = {
  displayName: string;
  profilePictureBaseUrl: string;
};

type MediaMetadata = {
  creationTime: string;
  height: string;
  width: string;
};

type PhotoMetadata = MediaMetadata & {
  photo: Photo;
};

type Photo = {
  apertureFNumber: number;
  cameraMake: string;
  cameraModel: string;
  exposureTime: string;
  focalLength: number;
  isoEquivalent: number;
};

type VideoMetadata = MediaMetadata & {
  video: Video;
};

type Video = {
  cameraMake: string;
  cameraModel: string;
  fps: number;
  status: VideoProcessingStatus;
};

enum VideoProcessingStatus {
  FAILED,
  PROCESSING,
  READY,
  UNSPECIFIED
}
