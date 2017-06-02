import * as React from "react";
import { Character, ICharacter } from "./classes/Character";

import { AttributeList } from "./AttributeList";

export interface ICharSheetProps {
    char: ICharacter;
}

export const CharSheet = (props: ICharSheetProps) => {

    return (
        <div className="charSheet">
            <h2>Character Sheet:</h2>
            <div><span><b>Name:</b> </span>{props.char.name}</div>

            <AttributeList attributes={props.char.attributes} />

        </div>
    );
};
