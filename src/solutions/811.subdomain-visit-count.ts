/*
 * @lc app=leetcode id=811 lang=typescript
 *
 * [811] Subdomain Visit Count
 */

// @lc code=start
function subdomainVisits(cpdomains: string[]): string[] {
    const map = new Map<string, number>();
    cpdomains.forEach((cpd) => {
        const [vst, url] = cpd.split(" ");
        const [a,b,c] = url.split('.');
        const num = +vst;
        if (a && b && c) {
            const dm = `${a}.${b}.${c}`;
            const sdm = `${b}.${c}`;
            map.set(dm, (map.get(dm) ?? 0) + num);
            map.set(sdm, (map.get(sdm) ?? 0) + num);
            map.set(c, (map.get(c) ?? 0) + num);
        } else if (a && b) {
            const sdm = `${a}.${b}`;
            map.set(sdm, (map.get(sdm) ?? 0) + num);
            map.set(b, (map.get(b) ?? 0) + num);
        }
    });
    return [...map].map(([dm, vs]) => `${vs} ${dm}`);
};
// @lc code=end

export default subdomainVisits;