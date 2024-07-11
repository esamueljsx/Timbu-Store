"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logo from "../../../../public/assets/logo.png";
import Icon from "./Icons";
import { useCart } from "@/context/CartPageContext";

function Navbar() {
    const { cart } = useCart();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <nav className="bg-main py-4 sticky inset-0 z-20 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between w-full text-white">

                        <div className="md:flex md:items-center md:gap-12">
                            <Link className="block" href="/">
                                <span className="sr-only">Home</span>
                                <Image src={logo} width={80} height={80} className="min-w-[120px]" alt="Timbu Book Shop" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Button
                                    path="/cart"
                                    variant="blue"
                                >
                                    Cart
                                    <Icon type="cart" size={24} />
                                </Button>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 text-[0.65rem] font-medium size-5 bg-blue-100 border-2 border-main rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-white/85 transition-all ease-linear duration-200 hover:text-white cursor-pointer">
                                <Icon type="profile" size={28} />
                            </span>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;