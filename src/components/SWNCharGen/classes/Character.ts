export interface ICharacter {
    name: string;
}

export class Character implements ICharacter {
    public name: string;

    constructor() {
        this.name = "";
    }
}
