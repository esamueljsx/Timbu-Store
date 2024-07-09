"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import productLists from "@/utils/fakeData";
import { PageWrapper } from '@/app/components/ui/PageWrapper';
import Button from '@/app/components/ui/Button';
import pfp from "../../../../public/assets/pfp.jpg";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [product, setProduct] = useState({});

  const getProductById = async () => {
    const id = productId || 0;
    const productResponse = productLists.find((product) => product.id === Number(id));
    setProduct(productResponse);
  };

  useEffect(() => {
    getProductById();
  }, [productId]);

  return (
    <PageWrapper>
      <section className="py-16 antialiased">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
            <div className="block h-full w-full">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-7 text-white">
              <div className="flex flex-col gap-4 w-full">
                <h1 className="lg:text-5xl text-3xl font-semibold text-white">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-base font-medium">
                    <Image
                      src={pfp}
                      alt=""
                      className="rounded-full size-6 object-cover object-center"
                    />
                    HNG Shop
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-medium leading-none">(4.6)</p>
                    <Link href="#" className="text-sm font-medium leading-none underline hover:no-underline">
                      345 Reviews
                    </Link>
                  </div> */}
                </div>
                <p className="text-xl font-medium">{product.desc}</p>
                <p className="lg:text-4xl text-3xl font-semibold">{`$${product.price}`}</p>
              </div>

              <div className="flex w-full justify-end gap-4">
                <Button variant="outline" onClick={() => addToCart(product)}>
                  Add to cart
                </Button>
                <Button path={'/'}>
                  Buy now
                </Button>
              </div>

              <hr className="border-white/35" />

              <div className="flex items-center justify-between gap-2">
                <h2 className="text-2xl font-semibold text-white">Reviews</h2>
                <Link href="#" className="text-sm font-medium leading-none underline hover:no-underline">
                  345 Reviews
                </Link>
              </div>

              <div className="gap-8 flex flex-col">
                <div className="min-w-0 flex-1 space-y-3">
                  {[
                    { star: 5, width: '30%', count: 230 },
                    { star: 4, width: '70%', count: 60 },
                    { star: 3, width: '25%', count: 35 },
                    { star: 2, width: '10%', count: 10 },
                    { star: 1, width: '5%', count: 5 },
                  ].map((item) => (
                    <div key={item.star} className="flex items-center gap-2">
                      <p className="w-2 shrink-0 text-start text-sm font-medium leading-none">
                        {item.star}
                      </p>
                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <div className="flex h-1.5 w-full items-center overflow-hidden rounded-full bg-white/25">
                        <div className="h-full rounded-full bg-white" style={{ width: item.width }}></div>
                      </div>
                      {/* <p className="w-8 shrink-0 text-end text-sm font-medium leading-none">{item.count}</p> */}
                    </div>
                  ))}
                </div>

                <div className='flex justify-end'>
                  <Button path='#'>
                    Write a review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductDetails;
