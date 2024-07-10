"use client";
import React from "react";
import { useCart } from '@/context/CartContext';
import { PageWrapper } from "../components/ui/PageWrapper";
import Image from "next/image";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icons";
import Breadcrumb from "../components/ui/BreadCrumbs";

const CartPage = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Cart' }
    ];

    return (
        <PageWrapper>

            <section className="py-16 antialiased">
                <div className="max-w-7xl mx-auto px-4">


                    {cart.length === 0 ? (
                        <div className="mt-6 flex flex-col w-full items-center justify-center gap-7 text-center">
                            <p className="text-3xl text-white/60 font-bold">
                                Your Shopping Cart is Empty
                            </p>
                            <Button path="/product">
                                Start shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-20 gap-10">
                            <div className="lg:col-span-2 space-y-9 w-full order-last">
                                <h2 className="text-2xl font-semibold text-white">Cart Total</h2>

                                <div className="space-y-7">
                                    <div className="space-y-4 text-base text-white/60">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal">Subtotal</dt>
                                            <dd className="text-xl font-semibold text-white">${total.toFixed(2)}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4 text-[#66EA97]">
                                            <dt className="font-normal">Discount</dt>
                                            <dd className="text-xl font-semibold">-$0</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal">Tax</dt>
                                            <dd className="text-xl font-semibold text-white">$1.99</dd>
                                        </dl>
                                    </div>

                                    <dl className="text-2xl flex items-center justify-between gap-4 border-t border-white/35 pt-6">
                                        <dt className="font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="font-bold text-gray-900 dark:text-white">${(total + 1.99).toFixed(2)}</dd>
                                    </dl>
                                </div>

                                <div className="flex w-full">
                                    <Button path="/checkout" variant="blue" className="w-full">Proceed to Checkout</Button>
                                </div>
                            </div>

                            <div className="lg:col-span-3 flex flex-col gap-5">
                                <Breadcrumb items={breadcrumbItems} />
                                <h2 className="lg:text-2xl text-xl font-medium text-white">Your Cart</h2>

                                <div className="flex w-full flex-col gap-4">
                                    {cart.map((item) => (
                                        <div className="flex lg:flex-row flex-col w-full items-start gap-6 border border-white/30 p-4" key={item.id}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={160}
                                                height={160}
                                                quality={80}
                                                placeholder="blur"
                                                className="lg:size-40 w-full h-full object-cover"
                                            />

                                            <div className="flex flex-col gap-6 text-white w-full">
                                                <div className="flex flex-col gap-3 w-full">
                                                    <h1 className="text-2xl font-medium text-white">
                                                        {item.title}
                                                    </h1>

                                                    <p className="text-2xl font-semibold">${item.price.toFixed(2)}</p>

                                                    {/* <span>Sub Total ${(item.price * item.quantity).toFixed(2)}</span> */}
                                                </div>

                                                <div className="flex items-center justify-between w-full gap-2">

                                                    <div className="flex items-center gap-2 text-gray-900">
                                                        <button
                                                            onClick={() => decrementQuantity(item.id)}
                                                            className="inline-flex w-7 h-6 shrink-0 items-center justify-center rounded bg-white/60 hover:bg-white focus:outline-none"
                                                        >
                                                            <Icon type="minus" size={10} />
                                                        </button>

                                                        <span className="w-10 h-6 shrink-0 text-center text-base font-medium rounded bg-white focus:outline-none focus:ring-0">{item.quantity}</span>
                                                        <button
                                                            onClick={() => incrementQuantity(item.id)}
                                                            className="inline-flex w-7 h-6 shrink-0 items-center justify-center rounded bg-white/60 hover:bg-white focus:outline-none"
                                                        >
                                                            <Icon type="plus" size={10} />
                                                        </button>
                                                    </div>

                                                    <span className="size-10 flex items-center justify-center cursor-pointer rounded-full bg-red-400 hover:bg-red-500 transition ease-linear duration-200 p-1" onClick={() => removeFromCart(item.id)}>
                                                        <Icon type="trash" size={24} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </PageWrapper>
    );
};

export default CartPage;
