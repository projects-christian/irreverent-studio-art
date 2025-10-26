import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import type { Decimal } from '@prisma/client/runtime/library';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: { price: Decimal }) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: { rating: Decimal }) {
          return product.rating.toString();
        },
      },
    },
  },
});

