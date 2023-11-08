"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import type { NavLink } from "@/siteConfig";

type LinkProps = Omit<
    ComponentPropsWithoutRef<typeof NextLink>,
    "href" | "title"
> & {
    navLink: NavLink;
};

const defaultStyles = `
    font-copy
    text-xl
    font-extrabold
    text-b2b-neutral-50
    hover:text-b2b-neutral-100
    focus:outline-none
    focus:underline
    focus:decoration-solid
    focus:decoration-4
    focus:decoration-b2b-blue-500
    [text-decoration-skip-ink:none]
`;

const activeStyles = `
    text-b2b-yellow-500
    hover:text-b2b-yellow-600
    active:text-b2b-yellow-700
`;

export default function Link({ navLink, ...props }: LinkProps) {
    const isActive = usePathname().startsWith(navLink.href);
    const finalClassName = cn(defaultStyles, { [activeStyles]: isActive });
    return (
        <NextLink
            className={finalClassName}
            href={navLink.href}
            title={navLink.label}
            {...props}
        >
            {navLink.label}
        </NextLink>
    );
}
