import { Attribute, IAttribute } from "./Attribute";

export interface ICharacter {
    name: string;
    attributes: IAttribute[];
    attributeMethod: string;
}

export class Character implements ICharacter {
    public name: string;
    public attributes: Attribute[] = [];
    public attributeMethod: string;

    constructor() {
        this.name = "Character Name";
        this.attributeMethod = "random";
        this.attributes.push(new Attribute(0, "Strength", 10));
        this.attributes.push(new Attribute(1, "Dexterity", 10));
        this.attributes.push(new Attribute(2, "Constitution", 10));
        this.attributes.push(new Attribute(3, "Intelligence", 10));
        this.attributes.push(new Attribute(4, "Wisdom", 10));
        this.attributes.push(new Attribute(5, "Charisma", 10));
    }
}
