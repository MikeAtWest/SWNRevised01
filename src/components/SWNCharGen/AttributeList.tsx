import * as React from "react";
import { Attribute, IAttribute } from "./classes/Attribute";

export interface IAttributesListProps {
    attributes: IAttribute[];
}

export const AttributeList = (props: IAttributesListProps) => {

    const attributeItems: JSX.Element[] = [];
    for (const attr of props.attributes) {
        attributeItems.push(<div key={attr.index}><span>{attr.name}</span>{attr.finalScore}</div>);
    }

    return (
        <div>
            {attributeItems}
        </div>
    );
};
