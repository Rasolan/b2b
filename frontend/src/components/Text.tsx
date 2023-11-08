import type { ElementType } from "react";

import { cn } from "@/lib/utils";

import type { PolymorphProps } from "./Polymorph";

export function H1<T extends ElementType = "h1">({
    as,
    children,
    className,
    ...props
}: PolymorphProps<T>) {
    const Element = as || "h1";
    return (
        <Element
            className={cn("text-3xl font-heading text-white", className)}
            {...props}
        >
            {children}
        </Element>
    );
}

export function H2<T extends ElementType = "h2">({
    as,
    children,
    className,
    ...props
}: PolymorphProps<T>) {
    const Element = as || "h2";
    return (
        <Element
            className={cn("text-2xl font-heading text-white", className)}
            {...props}
        >
            {children}
        </Element>
    );
}

export function H3<T extends ElementType = "h3">({
    as,
    children,
    className,
    ...props
}: PolymorphProps<T>) {
    const Element = as || "h3";
    return (
        <Element
            className={cn("text-xl font-heading text-white", className)}
            {...props}
        >
            {children}
        </Element>
    );
}

export function P<T extends ElementType = "p">({
    as,
    children,
    className,
    ...props
}: PolymorphProps<T>) {
    const Element = as || "p";
    return (
        <Element
            className={cn(
                "text-base font-copy text-b2b-neutral-200",
                className,
            )}
            {...props}
        >
            {children}
        </Element>
    );
}

export function Span<T extends ElementType = "span">({
    as,
    children,
    className,
    ...props
}: PolymorphProps<T>) {
    const Element = as || "span";
    return (
        <Element
            className={cn(
                "text-base font-copy text-b2b-neutral-200",
                className,
            )}
            {...props}
        >
            {children}
        </Element>
    );
}
