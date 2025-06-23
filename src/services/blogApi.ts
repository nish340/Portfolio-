const API_BASE_URL = 'https://admin.nishchay.online/api';

export interface Blog {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  body: string;
  excerpt?: string;
  category: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  hidden: boolean;
  createdAt?: string;
  updatedAt?: string;
  meta: {
    views: number;
    likes: number;
    readTime: number;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords: string[];
  };
  coverImage: {
    url?: string;
    alt?: string;
  };
}

export interface BlogResponse {
  data: Blog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export const blogApi = {
  async getAllBlogs(page: number = 1, limit: number = 6): Promise<BlogResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      return {
        data: data.data || [],
        pagination: data.pagination || { page: 1, limit: 6, total: 0, pages: 1 }
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return { data: [], pagination: { page: 1, limit: 6, total: 0, pages: 1 } };
    }
  },

  async getBlogBySlug(slug: string): Promise<Blog | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      const blogs = data.data || [];
      return blogs.find((blog: Blog) => blog.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return null;
    }
  }
};