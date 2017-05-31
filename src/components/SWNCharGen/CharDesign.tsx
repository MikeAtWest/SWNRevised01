import * as React from "react";
import { Character, ICharacter } from "./classes/Character";

export interface ICharDesignProps {
    char: ICharacter;
    onChangeName: (event: any) => any;
}

export const CharDesign = (props: ICharDesignProps) => {

    return (
        <div className="charDesign">
            <h2>Design:</h2>
            <div><span>Name: </span><input value={props.char.name} onChange={props.onChangeName} placeholder="Name"/></div>
        </div>
    );
}
