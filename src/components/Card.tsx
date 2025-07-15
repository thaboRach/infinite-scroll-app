import type React from "react";

type CardProps = {
    id: string;
    title: string;
    body: string;
    ref?: React.Ref<HTMLDivElement>;
}

export function Card({ title, body, ref }: Readonly<CardProps>) {
    return (
        <article ref={ref} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-full">
            <div className="p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-700 capitalize">
                    {title}
                </h3>
                <p>
                    {body}
                </p>
            </div>
        </article>
    )
}
