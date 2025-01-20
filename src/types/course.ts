export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  duration: string;
}

export interface Section {
  id: string;
  title: string;
  videos: Video[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  category: string;
  duration: string;
  sections: Section[];
}