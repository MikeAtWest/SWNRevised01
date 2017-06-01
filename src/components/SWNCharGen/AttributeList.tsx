import * as React from "react";
import { Attribute, IAttribute } from "./classes/Attribute";

export interface IAttributesListProps {
    attributes: IAttribute[];
}

export const AttributeList = (props: IAttributesListProps) => {

    const attributeItems: JSX.Element[] = [];
    let count = 0;
    for (const attr of props.attributes) {
        attributeItems.push(
            <span key={attr.index}>
                <b>{attr.name}&nbsp;{attr.finalScore}&nbsp;</b>
                <span>({attr.modifierStr})</span>
                {count < props.attributes.length - 1 &&
                    <span>,&nbsp;</span>
                }
            </span>,
        );
        count++;
    }

    return (
        <div>
            {attributeItems}
        </div>
    );
};
