import * as React from "react";
import "./styles/char.css";

import { Character, ICharacter } from "./classes/Character";

import { CharDesign } from "./CharDesign";
import { CharSheet } from "./CharSheet";

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
            char,
        };

        this.bindCallbackFunctionsToThisComponent();
    }

    public onChangeName(e): void {
        const name = e.target.value;
        const char = this.state.char;
        char.name = name;
        this.setState({ char });
    }

    public onChangeAttributeMethod(e): void {
        const attributeMethod = e.target.value;
        const char = this.state.char;
        char.attributeMethod = attributeMethod;
        this.setState({ char });
    }

    public onRollForAttributes(e): void {
        const attributes = this.state.char.attributes;
        for (const attr of attributes) {
            attr.baseScore = this.getRandom(6) + this.getRandom(6) + this.getRandom(6);
            attr.setTo14 = false; // BUG
        }
        const char = this.state.char;
        char.attributes = attributes;
        this.setState({ char });
    }

    public onSetAttributeTo14(e): void {
        const attributeIndex = e.target.value;
        const attributes = this.state.char.attributes;
        for (const attr of attributes) {
            attr.setTo14 = false;
        }
        attributes[attributeIndex].setTo14 = true;
        const char = this.state.char;
        char.attributes = attributes;
        this.setState({ char });
    }

    public onSetAttribute(e): void {
        const attributeIndex = e.target.dataset.count;
        const attributeScore = e.target.value;
        const attributes = this.state.char.attributes;
        for (const attr of attributes) {
            attr.setTo14 = false;
        }
        attributes[attributeIndex].baseScore = attributeScore;
        const char = this.state.char;
        char.attributes = attributes;
        this.setState({ char });
    }

    public render() {
        return (
            <div>
                <h1>VAGABOND : SWN Revised 0.8 - Character Generator</h1>

                <CharDesign
                    char={this.state.char}
                    onChangeName={this.onChangeName}
                    onChangeAttributeMethod={this.onChangeAttributeMethod}
                    onRollForAttributes={this.onRollForAttributes}
                    onSetAttributeTo14={this.onSetAttributeTo14}
                    onSetAttribute={this.onSetAttribute}
                />

                <CharSheet char={this.state.char} />

            </div>

        );
    }

    private bindCallbackFunctionsToThisComponent() {
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAttributeMethod = this.onChangeAttributeMethod.bind(this);
        this.onRollForAttributes = this.onRollForAttributes.bind(this);
        this.onSetAttributeTo14 = this.onSetAttributeTo14.bind(this);
        this.onSetAttribute = this.onSetAttribute.bind(this);
    }

    private getRandom(die: number): number {
        return Math.floor((Math.random() * die) + 1);
    }
}
