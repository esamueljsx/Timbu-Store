import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "@/context/CartPageContext";

const Card = ({ id, image, title, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const book = { id, image, title, price };
        addToCart(book);
    };

    return (
        <div className="flex h-full">
            <div className="group flex flex-col w-full items-start gap-5 text-white">
                <Link
                    href={`/library/details?bookId=${id}`}
                    className="block overflow-hidden w-full h-full"
                >
                    <Image
                        src={image}
                        alt={title}
                        quality={80}
                        width={306}
                        height={340}
                        placeholder="blur"
                        loading="lazy"
                        className="lg:w-[19.125rem] lg:h-[21.25rem] w-full h-full object-cover object-center transition duration-500 group-hover:opacity-85 group-hover:scale-105"
                    />
                </Link>

                <div className="flex flex-col w-full gap-2">
                    <h3 className="text-lg text-gray-300 font-semibold leading-8 capitalize group-hover:underline group-hover:underline-offset-4">
                        {title}
                    </h3>

                    <div className="flex items-center justify-between gap-3">
                        <span className="text-2xl font-medium leading-6">
                            {`$${price.toFixed(2)}`}
                        </span>

                        <Button onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
