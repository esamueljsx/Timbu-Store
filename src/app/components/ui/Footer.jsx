import Link from "next/link";
import Icon from "./Icons";

function Footer() {
    const links = [
        {
            name: "Contact",
            href: "/"
        },
        {
            name: "Privacy Policy",
            href: "/"
        },
        {
            name: "Terms of Service",
            href: "/"
        },
    ];

    return (
        <footer aria-label="Site Footer">
            <section className="w-full py-6">
                <div className="max-w-screen-xl p-4 mx-auto">

                    <div className="border-t border-white/35 pt-6 w-full flex md:flex-row flex-col items-center md:justify-between lg:justify-between justify-center gap-6">
                        <div className="flex items-center gap-5 text-secondary">
                            <Link
                                href="https://youtube.com"
                                rel="noreferrer"
                                target="_blank"
                                className="bg-white size-10 p-2 rounded-full"
                            >
                                <span className="sr-only">Youtube</span>
                                <Icon type="yt" size={24} />
                            </Link>

                            <Link
                                href="https://www.instagram.com/"
                                rel="noreferrer"
                                target="_blank"
                                className="bg-white size-10 p-2 rounded-full"
                            >
                                <span className="sr-only">Instagram</span>
                                <Icon type="instagram" size={24} />
                            </Link>

                            <Link
                                href="https://www.instagram.com/"
                                rel="noreferrer"
                                target="_blank"
                                className="bg-white size-10 p-2 rounded-full"
                            >
                                <span className="sr-only">X (formerly called Twiiter)</span>
                                <Icon type="x" size={24} />
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-7 items-center lg:justify-start justify-center text-sm text-white md:order-first">
                            {links.map((item, idx) => (
                                <Link href={item.href} key={idx}>
                                    {item.name}
                                </Link>
                            ))}
                            <p>
                                &copy; {new Date().getFullYear()} Timbu Book Store
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
