import React from "react";

export type TypographyProps = {
    variant?: string
    size?: string
    children: React.ReactNode
    element?: keyof JSX.IntrinsicElements
};

const Typography = ({
    variant = '',
    size = '',
    children,
    element = "p"
}: TypographyProps) => {
    const Element = element;
    return <Element>{children}</Element>;
};

export default Typography;
