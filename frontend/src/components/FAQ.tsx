"use client";

import { ComponentPropsWithoutRef } from "react";
import { HiChevronDown } from "react-icons/hi";

import * as Accordion from "@radix-ui/react-accordion";

import { H3, P } from "@/components/Text";

import styles from "./FAQ.module.css";

type ItemProps = Omit<
    ComponentPropsWithoutRef<typeof Accordion.Item>,
    "className"
> & {
    question: string;
};
function Item({ children, question, value }: ItemProps) {
    return (
        <Accordion.Item value={value}>
            <Trigger>{question}</Trigger>
            <Accordion.Content className={`${styles.content} overflow-hidden`}>
                <P className="py-8">{children}</P>
            </Accordion.Content>
        </Accordion.Item>
    );
}

function Trigger({
    children,
}: Omit<ComponentPropsWithoutRef<typeof Accordion.Trigger>, "className">) {
    return (
        <Accordion.Trigger
            className={`
                ${styles.trigger} 
                border-b-2 
                border-b2b-neutral-800 
                hover:border-b2b-neutral-500
                focus:outline-none 
                focus:border-b2b-neutral-500 

                pb-3 
                w-full 
                flex 
                text-center 
                items-center 
                justify-between
            `}
        >
            <H3 className="">{children}</H3>
            <HiChevronDown className={`text-white ${styles.chevron}`} />
        </Accordion.Trigger>
    );
}

export default function FAQ() {
    return (
        <Accordion.Root
            type="single"
            collapsible
            className="w-full max-w-[28rem] flex flex-col gap-4"
        >
            <Item value="item-1" question="Нужна ли лицензия?">
                Нет, лицензия не нужна можно играть с пиратки
            </Item>
            <Item value="item-2" question="Можно ли играть с телефона?">
                На данный момент наш сервер не поддерживает данную функцию
            </Item>
            <Item value="item-3" question="Зачем платить за проходку?">
            Платный доступ к серверу помогает отсеивать потенциальных гриферов и обеспечивает быстрый доступ. На нашем сервере нет системы приватной территории. Важно подчеркнуть, что сервер существует за счет доходов от проходок, и у нас нет продажи привилегий, которые дарят игровые преимущества. Более того, у нас есть возможность бесплатного доступа, но она предполагает прохождение отбора.
            </Item>
            <Item value="item-5" question="Что будет если загриферят?">
            На сервере стоит плагин, который записывает все действия игроков. Если у вас что-то своровали, вы можете написать в интерпол. Факт кражи проверят, а нарушителя накажут. Если вас загриферят, то грифер получит бан, а ваши постройки восстановят.
Сколько людей на сервере и какой онлайн?
            </Item>
        </Accordion.Root>
    );
}
