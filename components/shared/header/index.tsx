"use client";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={
                scrolled
                    ? "header scrolled w-full border-b"
                    : "header w-full border-b"
            }
        >
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <Image
                            src="images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            height={48}
                            width={48}
                            priority={true}
                        />
                        <span className="hidden lg:block font-bold text-2xl ml-3">
                            {" "}
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;
