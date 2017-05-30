import * as React from "react";

export interface ISWNCharGenProps extends React.Props<SWNCharGen> {
    characterId: number;
}

export interface ISWNCharGenState {
    test: string;
}

export default class SWNCharGen extends React.Component<ISWNCharGenProps, ISWNCharGenState> {

    public constructor(props: ISWNCharGenProps) {
        super(props);

        this.state = { test: "this is a test"};
    }

    public render() {
        return (
            <div>
                Character Generator
            </div>

        );
    }
}
