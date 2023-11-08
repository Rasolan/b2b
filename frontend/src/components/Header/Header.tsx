"use client";

import Image from "next/image";
import NextLink from "next/link";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { useState } from "react";

import { ClickAwayListener } from "@mui/base";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Squash as Hamburger } from "hamburger-react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/siteConfig";

import logo from "@assets/logo.png";

import Button from "../Button";
import Link from "./Link";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
    onLinkClick: () => void;
};

function Nav({ onLinkClick, className, ...props }: NavProps) {
    return (
        <nav className={cn("w-full", className)} {...props}>
            <ul className="flex flex-col md:flex-row gap-8 justify-between items-center text-center w-full">
                <div className="flex flex-col md:flex-row gap-4">
                    {navLinks.map((navLink) => (
                        <li key={navLink.href}>
                            <Link navLink={navLink} onClick={onLinkClick} />
                        </li>
                    ))}
                </div>
                <li>
                    <Button
                        as={NextLink}
                        variant="secondary"
                        href="/#start"
                        onClick={onLinkClick}
                    >
                        Начать играть
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <ClickAwayListener onClickAway={close}>
            <Collapsible.Root
                asChild
                open={open}
                onOpenChange={(isOpen: boolean) => setOpen(isOpen)}
            >
                <header
                    className={cn(
                        `
                            flex 
                            flex-col
                            gap-4
                            md:flex-row
                            justify-start
                            items-center
                            overflow-hidden

                            fixed
                            top-0 
                            w-screen
                            z-50 

                            transition-[padding] 
                            pt-2 
                            pb-2 
                            px-4 
                            lg:px-20 

                            border-b-2 
                            border-b2b-neutral-900 
                            bg-b2b-neutral-950/90 
                            backdrop-blur 
                            shadow-b2b-neutral-950 
                            shadow-md
                        `,
                        {
                            "md:pb-2 pb-8": open,
                        },
                    )}
                >
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <h1>
                            <NextLink href="/" title="Главная" onClick={close}>
                                <Image
                                    src={logo}
                                    alt="Block2Box"
                                    className="min-w-[3rem] max-w-[3rem] mr-4 hover:brightness-90 active:brightness-75"
                                />
                            </NextLink>
                        </h1>
                        <Collapsible.Trigger className="md:hidden">
                            <Hamburger
                                color="white"
                                duration={0.0}
                                toggled={open}
                                toggle={setOpen}
                            />
                        </Collapsible.Trigger>
                    </div>
                    <Collapsible.Content
                        asChild
                        className={cn(
                            "md:hidden [&[data-state='open']]:animate-slide-down [&[data-state='closed']]:animate-slide-up",
                        )}
                    >
                        <Nav onLinkClick={close} aria-label="mobile" />
                    </Collapsible.Content>
                    <Nav
                        onLinkClick={close}
                        className="hidden md:block"
                        aria-label="desktop"
                    />
                </header>
            </Collapsible.Root>
        </ClickAwayListener>
    );
}
