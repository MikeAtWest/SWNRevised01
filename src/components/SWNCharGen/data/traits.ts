const allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const level2andUp = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export const traits = {

    bonusNonCombatNonPsychicSkillPointPerLevel: {
        grantedTrait: "Skill Point",
        grantedTraitCategories: ["Non-Combat", "Non-Psychic"],
        number: 1,
        atlevels: level2andUp,
        description: "Gain a bonus skill point for non-Combat non-Psychic skills when advance an experience level."
    },

    combatFocus: {
        grantedTrait: "Focus Level",
        grantedTraitCategories: ["Combat"],
        number: 1,
        atlevels: [1],
        description: "Gain a free level in a combat Focus."
    },

    extraTwoHitPoints: {
        grantedTrait: "Hit Point Maximum Bonus",
        number: 2,
        description: "Gain two extra maxmiumum hit points at each level."
    },

    haveEffortScore: {
        grantedTrait: "Effort",
        description: "Have an Effort score equal to highest Psychic Discipline level plus highest of Wisdom or Constitution modifier."
    },

    learnPsychicSkills: {
        grantedTrait: "Learn Psychic Skills",
        description: "Can learn any Psychic Discipline Skills and Techniques."
    },

    learnOnePsychicSkill: {
        grantedTrait: "Learn One Psychic Skills",
        description: "Can learn a single Psychic Discipline Skill and it's Techniques."
    },


    luckyInCombat: {
        grantedTrait: "Textual",
        description: "Lucky in combat. Once per scene negate a successful attack against you, or make a missed attack you made into a hit."
    },

    nonCombatFocus: {
        grantedTrait: "Focus Level",
        grantedTraitCategories: ["Non-Combat"],
        number: 1,
        atlevels: [1],
        description: "Gain a free level in a non-combat Focus."
    },

    oneBonusPsychicSkillLevel: {
        grantedTrait: "Skill Level",
        grantedTraitCategories: ["Psychic"],
        number: 1,
        atlevels: [1],
        description: "Gain one Psychic Discipline as a bonus skill."
    },    

    plusOneAttackAtFirstAndFifthLevel: {
        grantedTrait: "Attack Bonus",
        number: 1,
        atlevels: [1, 5],
        description: "Gain +1 to attack bonus at 1st and 5th levels."
    },

    rerollFailedSkillAttempt: {
        grantedTrait: "Textual",
        description: "Once per scene reroll failed skill check."
    },

    twoBonusPsychicSkillLevels: {
        grantedTrait: "Skill Level",
        grantedTraitCategories: ["Psychic"],
        number: 2,
        atlevels: [1],
        description: "Gain two Psychic Disciplines as bonus skills. Can pick same one twice to gain level-1 and a free level 1 Technique."
    },

}