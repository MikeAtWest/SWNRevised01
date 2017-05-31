import * as React from "react";
import "./styles/char.css";

import { Character, ICharacter } from "./classes/Character";

import { CharDesign } from "./CharDesign";

export interface ISWNCharGenProps extends React.Props<SWNCharGen> {
    characterId: number;
}

export interface ISWNCharGenState {
    char: ICharacter;
}

export default class SWNCharGen extends React.Component<ISWNCharGenProps, ISWNCharGenState> {

    public constructor(props: ISWNCharGenProps) {
        super(props);

        const char = new Character();

        this.state = {
            char: char
        };

        this.bindCallbackFunctionsToThisComponent();
    }

    public onChangeName(e): void {
        const name = e.target.value;
        const char = this.state.char;
        char.name = name;
        this.setState({ char });
    }

    private bindCallbackFunctionsToThisComponent() {
        this.onChangeName = this.onChangeName.bind(this);
    }

    public render() {
        return (
            <div>
                <h1>VAGABOND : SWN Revised 0.8 - Character Generator</h1>

                <CharDesign char={this.state.char} onChangeName={this.onChangeName} />

                <div className="charSheet">
                    <h2>Character Sheet:</h2>
                    <div><span>Name: </span>{this.state.char.name}</div>
                </div>
            </div>

        );
    }
}
