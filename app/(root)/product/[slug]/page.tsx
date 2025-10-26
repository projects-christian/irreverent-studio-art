import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import { Button } from '@/components/ui/button';
import ProductImages from '@/components/shared/product/product-images';
// import ProductDetailTabs from '@/components/shared/product/product-detail-tabs';
import RelatedProducts from '@/components/shared/product/related-products/related-products'
import SimilarOption from '@/components/shared/product/similar-options/similar-options';

const ProductDetailsPage = async (props: {
        params: Promise<{ slug: string }>;
    }) => {
    
    const { slug } = await props.params;

    const product = await getProductBySlug(slug);
    if (!product) notFound();

    let card = false

    return ( 
        <>
            <section className='w-[80%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 mb-24'>
                    {/* Images Column */}
                    <div className='col-span-2'>
                        <ProductImages images={product.images} />
                    </div>
                    {/* Details Column */}
                    <div className='col-span-2 p-5 sm:pt-0'>
                        <div className='flex flex-col gap-6 mb-6'>
                            <div>
                                <p className='text-sm mb-0'>
                                    {product.category}
                                </p>
                                <h1 className='h3-bold text-xl sm:text-3xl mb-1'>{product.name}</h1>
                                {/* <Rating value={Number(product.rating)} /> */}
                            </div>
                            <div className='flex gap-2'>
                                <span className='inline-block text-sm bg-background-greenForest leading-none px-[12px] py-[4px]'>in-stock</span>
                                <p className='text-sm'>{product.numReviews} reviews</p>
                            </div> 
                            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                                <ProductPrice
                                value={Number(product.price)}
                                className='py-2'
                                />
                            </div>
                        </div>
                        <div className='mb-8'>
                            <p className='font-semibold'>Description</p>
                            <p>{product.description}</p>
                        </div>
                        <div className='text-[13px] mb-8'>
                            <em>Este es un producto de Irreverent</em>
                            <br />
                            <em>Tiempo de entrega: 4 semanas.</em>
                        </div>
                        <div className='cursor-pointer mb-8'>
                            <span className='inline-block rounded-md text-lg bg-background-greenForest leading-none px-4 py-2'>Realizar pedido</span>
                        </div>
                        <div>
                            <div className="product_meta">
                                <div className="sku_wrapper border-t border-t-solid border-greenForest">SKU: <span className="sku">2F6-1R</span></div>
                                <div className="posted_in border-t border-t-solid border-greenForest">Categorías: <a href="#" rel="tag">{product.category}</a>, <a href="#" rel="tag">{product.category}</a></div>
                                <div className="yith-wcbr-brands border-t border-b border-t-solid border-greenForest">
                                    Brand:
                                    <span itemProp="brand">
                                        <a href="#" rel="tag"> {product.brand}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Action Column */}
                        {card && (
                            <div>
                                <Card>
                                    <CardContent className='p-4'>
                                        <div className='mb-2 flex justify-between'>
                                        <div>Price</div>
                                        <div>
                                            <ProductPrice value={Number(product.price)} />
                                        </div>
                                        </div>
                                        <div className='mb-2 flex justify-between'>
                                        <div>Status</div>
                                        {product.stock > 0 ? (
                                            <Badge variant='outline'>In Stock</Badge>
                                        ) : (
                                            <Badge variant='destructive'>Out Of Stock</Badge>
                                        )}
                                        </div>
                                        {product.stock > 0 && (
                                        <div className='flex-center'>
                                            <Button className='w-full'>Add to cart</Button>
                                        </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mb-24'>
                    {/* <ProductDetailTabs /> */}
                </div>
                <div className='mb-24'>
                   <RelatedProducts />
                </div>
                <div className='mb-24'>
                    <SimilarOption />
                </div>
            </section>
        </>
    );
}
 
export default ProductDetailsPage;