import * as React from "react";
import { Character, ICharacter } from "./classes/Character";

import { AttributeList } from "./AttributeList";

export interface IRandomRollProps {
    char: ICharacter;
    onRollForAttributes: (event: any) => any;
    onSetAttributeTo14: (event: any) => any;
}

export const RandomRoll = (props: IRandomRollProps) => {

    const attributeItems: JSX.Element[] = [];
    for (const attr of props.char.attributes) {
        attributeItems.push(
            <div key={attr.index} className="attributeSet">
                <span className="labelWidth">{attr.name}</span>
                <span className="labelWidth">

                    {!attr.setTo14 &&
                        <span>{attr.baseScore}</span>
                    }
                    
                    { attr.setTo14 &&
                        <span>14&nbsp;<span className="strike">{attr.baseScore}</span></span>
                    }
                </span>
                { attr.baseScore < 14 &&
                    <span className="labelWidth">Set to 14 <input type="radio" name="setTo14" value={attr.index} onClick={props.onSetAttributeTo14} checked={attr.setTo14} /></span>
                }
                </div>,
            );
    }

    return (
        <div>
            <div><span className="labelWidth">&nbsp;</span><input type="button" value="Roll" onClick={props.onRollForAttributes}/></div>
            {attributeItems}
        </div>
    );
};
