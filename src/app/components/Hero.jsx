import React from "react";
import Image from "next/image";
import bg from "../../../public/assets/bg.jpg";
import logo from "../../../public/assets/pfp.jpg";

export default function Header() {
    return (
        <div>
            <div className="block w-full pb-10">
                <div className="bg-zinc-300 w-full lg:h-[390px] h-[195px] overflow-hidden">
                    <Image
                        src={bg}
                        alt="Timbu Book Shop - HNG11 Task 2"
                        quality={100}
                        width={1024}
                        height={390}
                        className="w-full h-[195px] lg:h-full object-cover object-top"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex w-full flex-col items-start lg:gap-10 gap-8">
                        <div className="overflow-hidden lg:size-48 md:size-32 size-[88px] md:-mt-[10%] -mt-[12%]">
                            <Image
                                src={logo}
                                alt='Timbu Shop Logo'
                                quality={70}
                                placeholder="blur"
                                loading="lazy"
                                className="w-full h-full lg:object-cover object-fill object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-3 text-white w-full">
                            <h2 className="lg:text-4xl text-3xl font-semibold">
                                    HNG Bookstore
                            </h2>
                            <p className="lg:text-xl text-lg font-normal lg:w-1/2 w-full">
                                Equipping tech talents with perseverance, grit and skills to succeed in their tech careers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
