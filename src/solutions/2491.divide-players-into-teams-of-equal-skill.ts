/*
 * @lc app=leetcode id=2491 lang=typescript
 *
 * [2491] Divide Players Into Teams of Equal Skill
 */

// @lc code=start
function dividePlayers(skill: number[]): number {
    skill.sort((a, b) => a - b);
    const tgt = skill[0] + skill.at(-1)!;
    let ttl = skill[0] * skill.at(-1)!;
    let left = 1;
    let right = skill.length - 2;

    while (left < right) {
        const n1 = skill[left++];
        const n2 = skill[right--];

        if ((n1 + n2) !== tgt) return -1;

        ttl += n1 * n2;
    }
    return ttl;
};
// @lc code=end

export default dividePlayers;