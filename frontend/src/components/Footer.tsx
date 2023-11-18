import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import rasolan from "@assets/rasolan.png";

function FooterLink({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<typeof Link>) {
    return (
        <Link
            className={cn(
                "text-b2b-neutral-500 hover:text-b2b-neutral-600 underline decoration-transparent hover:decoration-current transition-all",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="bg-b2b-neutral-900 ">
            <div className="max-w-6xl mx-auto text-sm py-8 px-4 md:px-20 flex flex-col-reverse md:flex-row justify-between md:items-center gap-8 mt-8 transition-all">
                <div>
                    <ul className="text-b2b-neutral-500 flex flex-col md:flex-row whitespace-nowrap md:gap-4 mb-4">
                        <li>
                            <FooterLink href="https://wiki.block2box.com/pravila-proekta/pravila-dlya-platform">
                                Правила для платформ
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink href="https://wiki.block2box.com/pravila-proekta/politika-konfidencialnosti">
                                Политика конфиденциальности
                            </FooterLink>
                        </li>
                    </ul>
                    <div className="text-b2b-neutral-700">
                        <p>
                            Вся размещенная информация на сайте не является
                            публичной офертой.
                        </p>
                        <p>
                            We are in no way affiliated with or endorsed by
                            Mojang, AB.
                        </p>
                        <p className="mt-4">&copy; Block2Box, 2023</p>
                    </div>
                </div>
                <div className="whitespace-nowrap">
                    <p className="text-b2b-neutral-700 text-2xl cursor-default">
                        Designed by{" "}
                        <FooterLink
                            href="https://t.me/Rasolan4k"
                            className="font-heading hover:opacity-100 opacity-50 text-b2b-neutral-500 transition duration-300"
                        >
                            Rasolan
                            <Image
                                src={rasolan}
                                alt="Rasolan"
                                className="inline ml-4"
                            />
                        </FooterLink>
                    </p>
                </div>
            </div>
        </footer>
    );
}
