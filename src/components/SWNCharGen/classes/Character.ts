import { Attribute, IAttribute } from "./Attribute";
import { Background, IBackground } from "./Background";
import { ISkill, Skill } from "./Skill";

export interface ICharacter {
    name: string;
    attributes: IAttribute[];
    attributeMethod: string;
    background: IBackground;
    backgroundMethod: string;
    skills: ISkill[];
    addSkillLevels(skillName: string, levels: number, source: string);
}

export class Character implements ICharacter {
    public name: string;
    public attributes: Attribute[] = [];
    public attributeMethod: string;
    public background: Background;
    public backgroundMethod: string;
    public skills: Skill[];

    constructor() {
        this.name = "Character Name";
        this.attributeMethod = "random";
        this.attributes.push(new Attribute(0, "Strength", 10));
        this.attributes.push(new Attribute(1, "Dexterity", 10));
        this.attributes.push(new Attribute(2, "Constitution", 10));
        this.attributes.push(new Attribute(3, "Intelligence", 10));
        this.attributes.push(new Attribute(4, "Wisdom", 10));
        this.attributes.push(new Attribute(5, "Charisma", 10));
        this.background = new Background("");
        this.backgroundMethod = "";
        this.skills = [];
    }

    public addSkillLevels(skillName: string, levels: number, source: string) {
        const matchingSkills = this.skills.filter((s) => s.name === skillName);

        if (matchingSkills.length === 0) {
            this.skills.push(new Skill(skillName, levels - 1, source));
        }
        else {
            const existingSkill = this.skills.filter((s) => s.name === skillName)[0];
            existingSkill.level += levels;
        }
    }
}
