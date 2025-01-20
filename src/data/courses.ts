import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web development with React, TypeScript, and cutting-edge tools',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    duration: '40 hours',
    sections: [
      {
        id: 's1',
        title: 'Getting Started',
        videos: [
          {
            id: 'v1',
            title: 'Introduction to Modern Web Development',
            thumbnail: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop',
            embedUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
            duration: '15:00'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'AI & Machine Learning Fundamentals',
    description: 'Learn the basics of artificial intelligence and machine learning',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    instructor: 'Dr. Michael Chen',
    category: 'AI/ML',
    duration: '35 hours',
    sections: [
      {
        id: 's1',
        title: 'Introduction to AI',
        videos: [
          {
            id: 'v1',
            title: 'What is Artificial Intelligence?',
            thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
            embedUrl: 'https://www.youtube.com/embed/JMUxmLyrhSk',
            duration: '12:30'
          }
        ]
      }
    ]
  }
];