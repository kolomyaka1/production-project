import { memo, ReactNode } from 'react';

import { classNames } from '../../lib/classNames/classNames';

import cls from './Typography.module.scss';

export interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
    color?: 'dark' | 'gray' | 'green';
    size?: 'XL' | 'L' | 'M' | 'S';
    align?: 'center' | 'left' | 'right';
    weight?: 'medium' | 'regular' | 'light';
}

export const Typography = memo((props: TypographyProps) => {
    const {
        className,
        as = 'p',
        color = 'dark',
        size = 'M',
        align = 'left',
        weight = 'regular',
        children
    } = props;
    const Component = as;

    return (
        <Component
            className={classNames(
                '',
                {},
                [className, cls[as], cls[color], cls[size], cls[align], cls[weight]]
            )}
        >
            {children}
        </Component>
    );
});


