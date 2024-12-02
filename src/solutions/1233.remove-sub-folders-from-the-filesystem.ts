/*
 * @lc app=leetcode id=1233 lang=typescript
 *
 * [1233] Remove Sub-Folders from the Filesystem
 */

// @lc code=start
function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    let prev = `${folder[0]}/`;

    for (let i = 1, len = folder.length; i < len; i++) {
        const dir = folder[i];

        if (dir.startsWith(prev)) {
            folder[i] = '';
        } else {
            prev = `${dir}/`;
        }
    }
    return folder.filter(Boolean);
};
// @lc code=end

export default removeSubfolders;