"use client";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import { useEffect, useState } from "react";
import _CategoryDrawer from '@/components/shared/header/category-drawer'
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
                    ? "header scrolled w-full border-none "
                    : "header w-full border-none "
            }
        >
            <nav className="w-full bg-background-greenForest dark:text-text-dark py-1">
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <span className="text-sm font-medium dark:text-text-dark">Inicio</span>
                    <span className="text-sm font-medium dark:text-text-dark">Servicios</span>
                    <span className="text-sm font-medium dark:text-text-dark">Contacto</span>
                </div>
            </nav>
            <div className="wrapper flex-between">
                <div className="flex-start">
                    {/* <CategoryDrawer /> */}
                    <Link href="/" className="flex-start ml-4">
                        <Image
                            src="/images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            height={48}
                            width={48}
                            className="w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]"
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
