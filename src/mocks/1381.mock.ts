export default [
    [
        ["push", [1]], ["push", [2]], ["pop", []], ["push", [2]], ["push", [3]], ["push", [4]], ["increment", [5, 100]], ["increment", [2, 100]], ["pop", []], ["pop", []], ["pop", []], ["pop", []]
    ],
] as [string, number[]][][];

export const answers = [
    [null, null, 2, null, null, null, null, null, 103, 202, 201, -1]
];