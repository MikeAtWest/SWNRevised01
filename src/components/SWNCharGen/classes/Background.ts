export interface IBackground {
    name: string;
    freeSkill: string;
    quickSkills: string[];
    growthTable: string[];
    learningTable: string[];
}

export class Background implements IBackground {
    public name: string;
    public freeSkill: string;
    public quickSkills: string [];
    public growthTable: string[];
    public learningTable: string[];

    constructor(name: string) {
        this.name = name;
        this.freeSkill = "";
        this.quickSkills = [];
        this.growthTable = [];
        this.learningTable = [];
    }
}

export function BackgroundList(): Background[] {
    const bgl = [];

    const barb = new Background("Barbarian");
    barb.freeSkill = "Survive";
    barb.quickSkills = ["Notice", "Any Combat"];
    barb.growthTable = ["+1 Any Stat", "+2 Physical", "+2 Physical", "+2 Mental", "Exert", "Any Skill"];
    barb.learningTable = ["Any Combat", "Connect", "Exert", "Lead", "Notice", "Punch", "Sneak", "Survive"];

    bgl.push(barb);

    const clerg = new Background("Clergy");
    clerg.freeSkill = "Talk";
    clerg.quickSkills = ["Perform", "Know"];
    clerg.growthTable = ["+1 Any Stat", "+2 Mental", "+2 Physical", "+2 Mental", "Connect", "Any Skill"];
    clerg.learningTable = ["Administer", "Connect", "Know", "Lead", "Notice", "Perform", "Talk", "Talk"];
    bgl.push(clerg);

    const court = new Background("Courtesan");
    court.freeSkill = "Perform";
    court.quickSkills = ["Notice", "Connect"];
    court.growthTable = ["+1 Any Stat", "+2 Mental", "+2 Mental", "+2 Physical", "Connect", "Any Skill"];
    court.learningTable = ["Any Combat", "Connect", "Exert", "Notice", "Perform", "Survive", "Talk", "Trade"];
    bgl.push(court);

    return bgl;

}
