import * as React from "react";

// https://betterprogramming.pub/react-polymorphic-components-with-typescript-real-practice-example-94c8a205d079
type PolymorphOwnProps<T extends React.ElementType> = {
    children: React.ReactNode;
    as?: T;
};

export type PolymorphProps<T extends React.ElementType> = PolymorphOwnProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof PolymorphOwnProps<T>>;

export default function Polymorph<T extends React.ElementType>({
    as,
    children,
}: PolymorphProps<T>) {
    const Element = as || "div";
    return <Element>{children}</Element>;
}
