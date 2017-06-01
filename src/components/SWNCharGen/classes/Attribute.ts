export interface IAttribute {
    index: number;
    name: string;
    baseScore: number;
    setTo14: boolean;
    finalScore: number;
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
};
