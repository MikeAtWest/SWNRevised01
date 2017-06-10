import * as React from "react";
import { Character, ICharacter } from "./classes/Character";

import { AttributeList } from "./AttributeList";

export interface IPickFromArrayProps {
    char: ICharacter;
    onSetAttribute: (event: any) => any;
}

export interface IPickFromArrayState {
    x: number[];
}

// TODO: Make stateless function.
export class PickFromArray extends React.Component<IPickFromArrayProps, IPickFromArrayState> {

    private optionsToAssign = [14, 12, 11, 10, 9, 7];
    private options = [];

    public constructor(props: IPickFromArrayProps) {
        super(props);

        for (let i = 3; i <= 18; i++) { this.options.push(i); }
    }

    public render() {
        const attributeOptions: JSX.Element[] = [];
        for (const opt of this.options) {
            attributeOptions.push(<option key={opt}>{opt}</option>);
        }

        const attributeItems: JSX.Element[] = [];
        let count = 0;
        for (const attr of this.props.char.attributes) {
            const attrScore = this.props.char.attributes[count].baseScore;
            attributeItems.push(
                <div key={attr.index} className="attributeSet">
                    <span className="labelWidth">{attr.name}</span>
                    <span className="labelWidth">{attr.baseScore}</span>
                    <span className="labelWidth">
                        <select value={attrScore} data-count={count} onChange={this.props.onSetAttribute}>
                            {attributeOptions}
                        </select>
                    </span>
                </div>,
            );
            count++;
        }

        return (
            <div>
                <div><span className="labelWidth">To Assign: </span>{this.optionsToAssign.join(", ")}&nbsp;-&nbsp;{this.allAssigned()}</div>
                {attributeItems}
            </div>
        );
    };

    private allAssigned(): string {

        const attributesList = [];
        for (const attr of this.props.char.attributes) {
            attributesList.push(attr.baseScore);
        }
        attributesList.sort();

        const options = this.optionsToAssign.slice(0).sort();
        const allAssigned = attributesList.join("-") === options.join("-");

        if (allAssigned) { return "All assigned"; }

        return "Assign below:";

    }
};
