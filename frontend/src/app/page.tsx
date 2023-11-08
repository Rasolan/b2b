import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Tag from "@/components/Tag";
import { H1, H2, H3, P } from "@/components/Text";
import { cn } from "@/lib/utils";

import animations from "@assets/animations.png";
import friends from "@assets/friends.png";
import hero from "@assets/world.jpg";
import survive from "@assets/survive.png";
import trade from "@assets/trade.png";
import voice from "@assets/voice.png";
import worlds from "@assets/worlds.png";

function Section({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"section">) {
    const styles = cn(
        "max-w-7xl mx-auto px-4 md:px-20 my-8 transition-[padding] flex flex-col justify-center items-center",
        className,
    );
    return (
        <section className={styles} {...props}>
            {children}
        </section>
    );
}

type MiniFeatureCardProps = ComponentPropsWithoutRef<"li"> & {
    image: StaticImageData;
    heading: string;
};

function MiniFeatureCard({
    image,
    heading,
    className,
    ...props
}: MiniFeatureCardProps) {
    return (
        <li className="grid grid-rows-[1fr_auto] gap-12" {...props}>
            <Image
                src={image}
                alt={heading}
                className="max-w-xs"
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
            <H3>{heading}</H3>
        </li>
    );
}

type FeatureCardProps = MiniFeatureCardProps & {
    tags: string[];
};

function FeatureCard({
    image,
    heading,
    tags,
    children,
    className,
    ...props
}: FeatureCardProps) {
    return (
        <li
            className={cn(
                "flex flex-col gap-8 lg:flex-row lg:gap-12 justify-center items-center",
                className,
            )}
            {...props}
        >
            <Image
                src={image}
                alt={heading}
                className="max-w-md h-auto w-auto"
                quality={100}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
            <div>
                <div className="flex gap-4">
                    {tags.map((tag) => (
                        <Tag variant="blue" key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                <H3 className="mt-4 mb-4">{heading}</H3>
                <div className="max-w-md">{children}</div>
            </div>
        </li>
    );
}

function StartPlayingCard({
    className,
    children,
}: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={cn(
                "rounded-xl border p-8 min-w-min max-w-max flex flex-col gap-4 hover:brightness-110 transition-all duration-200 ease-out cursor-default",
                className,
            )}
        >
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <section
                className="bg-cover bg-left hero-image h-[max(75vh,480px)]"
                style={{
                    backgroundImage: `url(${hero.src})`,
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-[minmax(780px,_1fr)_1fr] w-screen h-full">
                    <div className="px-4 md:px-20 transition-[padding] bg-b2b-neutral-950/70 flex flex-col justify-center gap-6 hero-content">
                        <div className="">
                            <H1 className="mb-2.5">
                                Передовой ванильный сервер с упором на выживание
                            </H1>
                            <P className="max-w-x2">
                                Сервер с ванильным геймплеем, на котором
                                основное внимание уделяется на выживание и
                                дополнением игровым контентом.
                            </P>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-6 mb-5">
                                <Button variant="primary" as="a" href="#start">
                                    Начать играть
                                </Button>
                                <Button
                                    variant="secondary"
                                    as="a"
                                    href="#features"
                                >
                                    О сервере
                                </Button>
                            </div>
                            <P className="text-xs text-b2b-neutral-600">
                                Пиратка Java Edition 1.20.1
                            </P>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto">
                <Section className="flex flex-col items-center gap-16">
                    <div className="flex flex-col items-center text-center max-w-lg gap-4">
                        <H2>Сервер - виртуальная жизнь</H2>
                        <P>
                            Игроки присоединяются к серверу, чтобы
                            взаимодействовать, находить новых друзей,
                            компаньонов и знакомых.
                        </P>
                    </div>
                    <ul className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none text-center gap-16 whitespace-nowrap">
                        <MiniFeatureCard
                            image={survive}
                            heading="Выживайте и творите"
                        />
                        <MiniFeatureCard
                            image={friends}
                            heading="Играйте с друзьями"
                        />
                        <MiniFeatureCard
                            image={trade}
                            heading="Торгуйте и покупайте"
                        />
                    </ul>
                </Section>
                <Section
                    id="features"
                    className="bg-b2b-blue-700 relative w-screen -ml-[50vw] left-1/2 my-16 max-w-none"
                >
                    <div className="max-w-7xl mx-auto flex flex-col text-center items-center py-16 px-4">
                        <H2>Совместная игра без привилегий!</H2>
                        <H3>
                            Наша задача создать равные условия для всех игроков
                        </H3>
                    </div>
                </Section>
                <Section className="gap-16">
                    <ul>
                        <FeatureCard
                            image={worlds}
                            heading="Система миров"
                            tags={["Оптимизация"]}
                        >
                            <P>
                                Чтобы уменьшить нагрузку на сервер мы разделили
                                его на три мира:
                            </P>
                            <ul className="text-b2b-neutral-200 list-disc list-inside ml-4 my-2">
                                <li>основной мир</li>
                                <li>мир ферм</li>
                                <li>креатив мир</li>
                            </ul>
                            <P>
                                Таким образом, TPS сервера всегда стабилен - 20!
                            </P>
                        </FeatureCard>
                        <FeatureCard
                            image={animations}
                            heading="Уникальные анимации"
                            tags={["Плагин", "Ресурс пак"]}
                            className="lg:flex-row-reverse"
                        >
                            <P>
                                Поднимите свой игровой опыт на новый уровень,
                                давая жизнь игре и объектам без границ. Ваши
                                эмоции будут реагировать так, как вы задаете,
                                без необходимости загружать дополнительные
                                модификации.
                            </P>
                        </FeatureCard>
                        <FeatureCard
                            image={voice}
                            heading="Голосовой чат"
                            tags={["Плагин", "Модификация"]}
                        >
                            <P>
                                Поддайте жизнь вашим беседам и общению, словно
                                вы режиссер своего собственного аудиовизуального
                                мира. С нами каждая фраза, смех и реакция
                                становятся частью яркой анимированной палитры,
                                не требующей лишних усилий.
                            </P>
                        </FeatureCard>
                    </ul>
                </Section>
                <Section>
                    <H2 className="my-8">Ответы на вопросы</H2>
                    <FAQ />
                </Section>
                <Section>
                    <H2 id="start" className="my-3.5">
                        Готовы начать играть?
                    </H2>
                    <P>
                        Жмите на кнопку, чтобы подать заяку через Discord или купить проходку
                    </P>
                    <div className="flex flex-col lg:flex-row gap-11 mt-8">
                        <StartPlayingCard className="bg-b2b-blue-700 border-b2b-blue-400">
                            <H3>Проходка на сервер</H3>
                            <ul className="text-b2b-neutral-100 list-inside list-disc mb-4">
                                <li>Моментальный вход на сервер</li>
                                <li>Доступ ко всем сезонам</li>
                                <li>Доступ ко всему функционалу сервера</li>
                                <li>Minecraft Java Edition 1.20.1</li>
                            </ul>
                            <Button as={Link} href="#" variant="tertiary">
                                Купить проходку за 100₽
                            </Button>
                        </StartPlayingCard>
                        <StartPlayingCard className="bg-b2b-neutral-900 border-b2b-neutral-800">
                            <H3>Подача заявки</H3>
                            <ul className="text-b2b-neutral-100 list-inside list-disc mb-4">
                                <li>Ожидание приёма заявки</li>
                                <li>Доступ на 2 сезона</li>
                                <li>Доступ ко всему функционалу сервера</li>
                                <li>Minecraft Java Edition 1.20.1</li>
                            </ul>
                            <Button as={Link} href="#" variant="secondary">
                                Подать заявку
                            </Button>
                        </StartPlayingCard>
                    </div>
                </Section>
            </div>
        </main>
    );
}
