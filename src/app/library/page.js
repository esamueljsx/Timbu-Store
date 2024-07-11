"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import bookLists from "@/utils/fakeData";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delay: 0.6,
        },
    },
};

const images = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

function BookGrid() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        setBooks(bookLists);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-white text-3xl font-semibold">Explore our wide range of books</h1>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-11 w-full items-start justify-center"
                >
                    {books.map((item) => (
                        <motion.div key={item.id} variants={images}>
                            <Card
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
export default BookGrid;
