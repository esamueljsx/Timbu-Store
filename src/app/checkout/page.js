// pages/checkout.js
"use client";
import { useCart } from '@/context/CartContext';
import { PageWrapper } from "../components/ui/PageWrapper";
import Image from "next/image";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icons";
import Breadcrumb from "../components/ui/BreadCrumbs";
import InputField from '../components/ui/TextField';

const CheckoutPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '/cart' },
    { label: 'Checkout' },
  ];

  return (
    <PageWrapper>
      <section className="py-16 antialiased">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-20 gap-10">
            <div className="lg:col-span-2 space-y-6 w-full order-last">
              <h2 className="text-2xl font-semibold text-white">Order Summary</h2>

              <div className="border border-white/35">
                <div className="flex w-full flex-col">
                  {cart.map((item) => (
                    <div className="flex flex-row w-full items-start gap-4 p-4 border-b border-white/30" key={item.id}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        quality={80}
                        placeholder="blur"
                        className="lg:size-20 object-cover"
                      />

                      <div className="flex flex-col gap-3 w-full h-full">
                        <h1 className="text-xl font-semibold text-white">
                          {item.title}
                        </h1>

                        <p className="text-lg font-medium text-white/80">{item.quantity} x ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-base text-white/60 border-b border-white/35 p-4">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal">Subtotal</dt>
                    <dd className="text-xl font-semibold text-white">${total.toFixed(2)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal">Discount</dt>
                    <dd className="text-xl font-semibold text-[#66EA97]">-$0</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="font-normal">Tax</dt>
                    <dd className="text-xl font-semibold text-white">$1.99</dd>
                  </dl>
                </div>

                <dl className="text-2xl flex items-center justify-between gap-4 border-t border-white/35 p-4">
                  <dt className="font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="font-bold text-gray-900 dark:text-white">${(total + 1.99).toFixed(2)}</dd>
                </dl>
              </div>

              <div className="flex w-full">
                <Button path="#" className="w-full">Place order</Button>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-5">
              <Breadcrumb items={breadcrumbItems} />
              <h2 className="lg:text-2xl text-xl font-medium text-white">Checkout</h2>

              <div className="mt-3 flex w-full flex-col gap-7">
                <div className="grid grid-cols-1 gap-5 w-full">
                  <h2 className="text-xl font-medium text-white">Billing Information</h2>

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <InputField
                      type="text"
                      label="First Name"
                      id="firstName"
                      placeholder="Bod"
                    />

                    <InputField
                      type="text"
                      label="Last Name"
                      id="lastName"
                      placeholder="Relly"
                    />

                    <InputField
                      type="email"
                      label="Email Address"
                      id="email"
                      placeholder="e.g yourname@example.com"
                    />

                    <InputField
                      type="tel"
                      label="Phone Number"
                      id="phone"
                      placeholder="e.g 0123456789"
                    />
                  </div>

                  <InputField
                    type="text"
                    label="Address"
                    id="address"
                    placeholder="e.g Enter billing address"
                  />

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <InputField
                      type="text"
                      label="Country"
                      id="country"
                      placeholder="e.g Enter billing country"
                    />

                    <InputField
                      type="text"
                      label="State"
                      id="state"
                      placeholder="e.g Enter billing state"
                    />

                    <InputField
                      type="text"
                      label="City"
                      id="city"
                      placeholder="e.g Enter billing city"
                    />

                    <InputField
                      type="number"
                      label="Zip Code"
                      id="zipCode"
                      placeholder="12G 7RW"
                    />
                  </div>
                </div>

                <hr className="border-white/35" />

                <div className="grid grid-cols-1 gap-5 w-full">
                  <h2 className="text-xl font-medium text-white">Payment Information</h2>

                  <InputField
                    type="text"
                    label="Card holder name"
                    id="cardName"
                    placeholder="Bob relly"
                  />

                  <InputField
                    type="text"
                    label="card number"
                    id="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  />

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <InputField
                      type="text"
                      label="Expiry Date"
                      id="cardNumber"
                      placeholder="MM / YY"
                    />

                    <InputField
                      type="number"
                      label="CVC"
                      id="cardNumber"
                      placeholder="CVC"
                    />
                  </div>

                  <label for="save" className="flex cursor-pointer items-start gap-3 text-white text-sm font-meidum">
                    <div className="flex items-center">
                      &#8203;
                      <input type="checkbox" className="size-5 text-white border-white rounded-md" id="save" />
                    </div>

                    Save details for later purchase
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper >
  );
};

export default CheckoutPage;
