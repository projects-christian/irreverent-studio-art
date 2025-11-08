'use server'
import { PrismaClient } from '@prisma/client';
import { prisma } from "@/db/prisma"
import { convertToPlainObject } from "../utils"
import { LATEST_PRODUCT_LIMIT } from "../constants"

//Get latest products
export async function getLatestProducts() {

  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
      take: LATEST_PRODUCT_LIMIT,
      orderBy: { createdAt: 'desc'},
  })

    return convertToPlainObject(data)
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

//Get all categories
export async function getAllCategories() {
  const data = await prisma.product.groupBy({
    by: ['category'],
    _count: true,
  });
  return data;
}