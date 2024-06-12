
export function supportsHasSelector(){
    return CSS.supports("selector(*:has(*))");
}