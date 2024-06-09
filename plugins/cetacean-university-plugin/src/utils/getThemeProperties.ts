
const computedStyles = window.getComputedStyle(document.documentElement);

export const ThemeProperties = {
    primaryColor: 
        computedStyles.getPropertyValue("--university-theme-primary-color")
        || "#115a82",
    secondaryColor: 
        computedStyles.getPropertyValue("--university-theme-secondary-color")
        || "#86c4da"
} as const;