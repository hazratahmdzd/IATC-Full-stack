import { FC, HTMLAttributes } from "react";

interface CountProps extends HTMLAttributes<HTMLParagraphElement> {
    count: number;
}

export const Count: FC<CountProps> = ({ count}) => {
    return (
        <p>
            { count }
        </p>
    )
};