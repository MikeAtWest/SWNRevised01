import { traits } from "./traits";

export const classes = [
    {
        name: "Expert",
        grantPickLimit: null,
        grants: [
            traits.nonCombatFocus,
            traits.rerollFailedSkillAttempt,
            traits.bonusNonCombatNonPsychicSkillPointPerLevel,
        ],
        attackBonusLevelMultiplier: 0.5,
        attackBonusAddition: 0
    },
    {
        name: "Psychic",
        grantPickLimit: null,
        grants: [
            traits.learnPsychicSkills,
            traits.twoBonusPsychicSkillLevels,
            traits.haveEffortScore,
        ],
        attackBonusLevelMultiplier: 0.5,
    },
    {
        name: "Warrior",
        grantPickLimit: null,
        grants: [
            traits.combatFocus,
            traits.luckyInCombat,
            traits.extraTwoHitPoints,
        ],
        attackBonusLevelMultiplier: 1
    },
    {
        name: "Adventurer",
        grantPickLimit: 2,
        grants: [
            {
                description: "Partial Expert",
                grants: [
                    traits.nonCombatFocus,
                    traits.bonusNonCombatNonPsychicSkillPointPerLevel,
                ],
            },
            {
                description: "Partial Psychic",
                grants: [
                    traits.learnOnePsychicSkill,
                    traits.oneBonusPsychicSkillLevel,
                    traits.haveEffortScore,
                ],
            },
            {
                description: "Partial Warrior",
                grants: [
                    traits.combatFocus,
                    traits.plusOneAttackAtFirstAndFifthLevel,
                    traits.extraTwoHitPoints
                ],
            }
        ],
        attackBonusLevelMultiplier: 0.5,
    }
]

