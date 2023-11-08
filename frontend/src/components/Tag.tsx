import * as React from "react";

import { cn } from "@/lib/utils";

type TagVariant = "blue";

type TagProps = {
    variant: TagVariant;
    children: React.ReactNode;
    className?: string;
};

export default function Tag({ variant, children, className }: TagProps) {
    let variantStyles;

    switch (variant) {
        case "blue":
            variantStyles = `
                bg-b2b-blue-600 
                hover:bg-b2b-blue-500
                text-b2b-neutral-50
            `;
            break;
    }

    const finalClassName = cn(
        variantStyles,
        `
            cursor-default
            rounded-lg
            font-heading
            transition-all
            duration-75 
            ease-in-out
            whitespace-nowrap 
            w-min 
            px-5
            py-1 
            text-sm
        `,
        className,
    );

    return <div className={finalClassName}>{children}</div>;
}
