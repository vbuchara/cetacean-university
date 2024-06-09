
export function isEqualSet(
    firstSet: Set<any>,
    secondSet: Set<any>
){
    return firstSet.size === secondSet.size
        && [...firstSet].every((value) => secondSet.has(value));
}