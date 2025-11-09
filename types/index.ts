import { z } from 'zod'
import { insertProductSchema } from '@/lib/validators';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  name?: string;
  slug?: string;
  category?: string;
  images?: string[];
  brand?: string;
  description?: string;
  stock?: number;
  price?: string;
  rating: string;
  numReviews: number;
  isFeatured?: boolean;
  banner?: string;
  createdAt: Date;
};
