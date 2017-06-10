export interface ISkill {
    name: string;
    level: number;
    source: string;
}

export class Skill {
    public name: string;
    public level: number;   
    public source: string;

    constructor(name: string, level: number, source: string) {
        this.name = name;
        this.level = level;
        this.source = source;
    }
}