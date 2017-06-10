import * as React from "react";
import { Background, BackgroundList, IBackground, } from "./classes/Background";
import { Character, ICharacter } from "./classes/Character";

export interface IBackgroundPickProps {
    char: ICharacter;
    onSetBackground: (event: any) => any;
    onChangeBackgroundMethod: (event: any) => any;
}

export const BackgroundPick = (props: IBackgroundPickProps) => {

    const backgrounds = BackgroundList();

    const bgOptions: JSX.Element[] = [];
    bgOptions.push(<option key={null}>-- select --</option>);
    for (const opt of backgrounds) {
        bgOptions.push(<option key={opt.name}>{opt.name}</option>);
    }

    const skills: JSX.Element[] = [];
    for (const skill of props.char.skills) {
        skills.push(<span key={skill.name}>{skill.name}-{skill.level}, </span>);
    }

    const learningTableOptions: JSX.Element[] = [];
    learningTableOptions.push(<option key={null}>-- select --</option>);
    for (const opt of props.char.background.learningTable) {
        learningTableOptions.push(<option key={opt}>{opt}</option>);
    }

    const learningTableSelect = <select>{learningTableOptions}</select>;

    const showLearningTablePicks = props.char.backgroundMethod === "picktwoskills";

    return (
        <div>
            <div>
                <span className="labelWidth">Background:</span>
                <select value={props.char.background.name} onChange={props.onSetBackground}>{bgOptions}</select>
            </div>
            <div>Background Options:</div>
            <div><span className="labelWidth">Free Skill:</span>{props.char.background.freeSkill}</div>
            <div><span className="labelWidth">Quick Skills:</span>{props.char.background.quickSkills.join(", ")}</div>
            <div><span className="labelWidth">Growth Table:</span>{props.char.background.growthTable.join(", ")}</div>
            <div><span className="labelWidth">Learning Table:</span> {props.char.background.learningTable.join(", ")}</div>
            <div>
                <span className="labelWidth">&nbsp;</span>
                <label>Free Skill plus Quick Skills: <input type="radio" radioGroup="backgroundType" name="backgroundType" checked={props.char.backgroundMethod === "quickskills"} value="quickskills" onChange={props.onChangeBackgroundMethod} /></label>
                <label>Free Skill plus pick two skills from Learning Table: <input type="radio" radioGroup="backgroundType" name="backgroundType" checked={props.char.backgroundMethod === "picktwoskills"} value="picktwoskills" onChange={props.onChangeBackgroundMethod} /></label>
                <label>Make three random rolls on Growth or Learning Tables: <input type="radio" radioGroup="backgroundType" name="backgroundType" checked={props.char.backgroundMethod === "threerolls"} value="threerolls" onChange={props.onChangeBackgroundMethod} /></label>
            </div>

            {showLearningTablePicks &&
                <div>
                    <div><span className="labelWidth">Pick Skill 1:</span>{learningTableSelect}</div>
                    <div><span className="labelWidth">Pick Skill 2:</span>{learningTableSelect}</div>
                </div>
            }

            <div><span className="labelWidth">Background Skills:</span>{skills}</div>

        </div>
    );
};


