import * as React from "react";
import { Character, ICharacter } from "./classes/Character";

import { RandomRoll } from "./RandomRoll";

export interface ICharDesignProps {
    char: ICharacter;
    onChangeName: (event: any) => any;
    onChangeAttributeMethod: (event: any) => any;
    onRollForAttributes: (event: any) => any;
    onSetAttributeTo14: (event: any) => any;
}

export const CharDesign = (props: ICharDesignProps) => {

    return (
        <div className="charDesign">
            <h2>Design:</h2>
            <div><span className="labelWidth">Name: </span><input value={props.char.name} onChange={props.onChangeName} placeholder="Name" /></div>
            <div>
                <span className="labelWidth">Attributes:</span>
                <label>Random roll: <input type="radio" radioGroup="attributeMethod" name="attributeMethod" checked={props.char.attributeMethod === "random"} value="random" onChange={props.onChangeAttributeMethod} /></label>
                <label>Pick from array: <input type="radio" radioGroup="attributeMethod" name="attributeMethod" checked={props.char.attributeMethod === "picked"} value="picked" onChange={props.onChangeAttributeMethod} /></label>
            </div>

            {props.char.attributeMethod === "random" &&
                <RandomRoll
                    char={props.char}
                    onRollForAttributes={props.onRollForAttributes}
                    onSetAttributeTo14={props.onSetAttributeTo14}
                />
            }

            {props.char.attributeMethod === "picked" &&
                <div>Picked</div>
            }
        </div>
    );
};
