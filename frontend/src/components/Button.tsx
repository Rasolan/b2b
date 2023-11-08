import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

import type { PolymorphProps } from "./Polymorph";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps<T extends ElementType> = PolymorphProps<T> & {
    variant: ButtonVariant;
};

const styles: { [key in ButtonVariant]: string } = {
    primary: `
        text-b2b-neutral-50
        bg-b2b-blue-500 
        focus:outline-b2b-blue-500
        hover:bg-b2b-blue-600 
        hover:text-b2b-neutral-100
        hover:outline-b2b-blue-600
        active:bg-b2b-blue-700 
        active:text-b2b-neutral-200 
        active:outline-blue-700
        disabled:bg-b2b-neutral-600 
        disabled:text-b2b-neutral-200
    `,
    secondary: `
        text-b2b-yellow-500 
        bg-transparent 
        ring-inset 
        ring-2 
        ring-b2b-yellow-500
        focus:outline-b2b-yellow-500 
        hover:outline-b2b-yellow-600 
        hover:text-b2b-yellow-600
        active:ring-b2b-yellow-700 
        active:text-b2b-yellow-700 
        active:outline-b2b-yellow-700 
        disabled:ring-neutral-600
        disabled:text-neutral-600
    `,
    tertiary: `
        text-b2b-blue-500
        bg-b2b-neutral-50
        focus:outline-b2b-neutral-50
        hover:bg-b2b-neutral-100
        hover:outline-b2b-neutral-100
        hover:text-b2b-blue-600
        active:bg-b2b-neutral-200
        active:outline-b2b-neutral-200
        active:text-b2b-blue-700
        disabled:bg-b2b-neutral-600 
        disabled:text-b2b-neutral-200
    `,
};

export default function Button<T extends ElementType = "button">({
    as,
    variant,
    children,
    className,
    ...props
}: ButtonProps<T>) {
    const Element = as || "button";
    const variantStyles = styles[variant];
    const finalClassName = cn(
        variantStyles,
        `
            rounded-full 
            font-heading 
            transition-all
            duration-75 
            ease-in-out
            whitespace-nowrap 
            w-min 
            px-5 
            py-1 
            text-base
            focus:outline-2 
            focus:outline-offset-2 
            focus:outline
            disabled:outline-none

        `,
        className,
    );

    return (
        <Element className={finalClassName} {...props}>
            {children}
        </Element>
    );
}
