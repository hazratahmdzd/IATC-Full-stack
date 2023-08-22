import type { FC, ReactNode } from "react";
import { Button, Headingtxt, Smalltxt } from "..";
import feedStyles from '../Feedcard/feedcard.module.css';

interface CardmiddleProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const Cardmiddle: FC<CardmiddleProps> = ({ className }) => {
    return (
        <div className={className}>
            <Headingtxt className={className}>
            Add tags for solutions
            </Headingtxt>
            <Smalltxt className={feedStyles.text}>
            Easier to search for solutions based on a seicific stack.
            </Smalltxt>
            <Button>Enhancement</Button>
        </div>
    )
}