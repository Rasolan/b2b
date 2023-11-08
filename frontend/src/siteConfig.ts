export type NavLink = {
    href: `/${string}`;
    label: string;
};

export const navLinks: readonly NavLink[] = [
    {
        href: "/shop",
        label: "Магазин",
    },
    {
        href: "/stats",
        label: "Статистика",
    },
    {
        href: "/rules",
        label: "Правила",
    },
    {
        href: "/wiki",
        label: "Вики",
    },
];
