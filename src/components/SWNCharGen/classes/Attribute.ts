export interface IAttribute {
    index: number;
    name: string;
    baseScore: number;
    setTo14: boolean;
    finalScore: number;
    modifier: number;
    modifierStr: string;
}

export class Attribute implements IAttribute {
    public index: number;
    public name: string;
    public baseScore: number;
    public setTo14: boolean;

    constructor(index: number, name: string, baseScore: number) {
        this.index = index;
        this.name = name;
        this.baseScore = baseScore;
        this.setTo14 = false;
    }

    public get finalScore(): number {
        let finalScore = this.baseScore;
        if (this.setTo14) {
            finalScore = 14;
        }
        return finalScore;
    }

    public get modifier(): number {
        const finalScore = this.finalScore;
        if (finalScore <= 3) { return -2; }
        if (finalScore <= 7) { return -1; }
        if (finalScore <= 13) { return 0; }
        if (finalScore <= 17) { return 1; }
        return 2;
    }

    public get modifierStr(): string {
        const mod = this.modifier;
        if (this.modifier >= 0) {
            return "+" + mod.toString();
        } else {
            return mod.toString();
        }
    }
};
