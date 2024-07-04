import type { ColorObject } from "@wordpress/components/build-types/color-palette/types";
import type { ValueOf } from "type-fest";

export class WordpressColorsPresets {
    public static readonly PresetPrefix = "--wp--preset--color" as const;

    // Default
    public static readonly Black = `${this.PresetPrefix}--black` as const;
    public static readonly White = `${this.PresetPrefix}--white` as const;
    public static readonly CyanBluishGray = `${this.PresetPrefix}--cyan-bluish-gray` as const;
    public static readonly PalePink = `${this.PresetPrefix}--pale-pink` as const;
    public static readonly VividRed = `${this.PresetPrefix}--vivid-red` as const;
    public static readonly LuminousVividOrange = `${this.PresetPrefix}--luminous-vivid-orange` as const;
    public static readonly LuminousVividAmber = `${this.PresetPrefix}--luminous-vivid-amber` as const;
    public static readonly LightGreenCyan = `${this.PresetPrefix}--light-green-cyan` as const;
    public static readonly VividGreenCyan = `${this.PresetPrefix}--vivid-green-cyan` as const;
    public static readonly PaleCyanBlue = `${this.PresetPrefix}--pale-cyan-blue` as const;
    public static readonly VividCyanBlue = `${this.PresetPrefix}--vivid-cyan-blue` as const;
    public static readonly VividPurple = `${this.PresetPrefix}--vivid-purple` as const;

    // Cetacean University Theme
    public static readonly Primary = `${this.PresetPrefix}--primary` as const;
    public static readonly Secondary = `${this.PresetPrefix}--secondary` as const;

    public static readonly PresetVariablesSet = new Set([
        this.Black,
        this.White,
        this.CyanBluishGray,
        this.PalePink,
        this.VividRed,
        this.LuminousVividOrange,
        this.LuminousVividAmber,
        this.LightGreenCyan,
        this.VividGreenCyan,
        this.PaleCyanBlue,
        this.VividCyanBlue,
        this.VividPurple,
        this.Primary,
        this.Secondary,
    ]);

    public static readonly CssVariableRegex = /var\(([a-z-0-9,\s]+)\)/m;

    public static getColorFromVar(name: WordpressColorsPresets.PresetVariables): string {
        return getComputedStyle(document.body).getPropertyValue(name);
    }

    public static isPresetVariable(value: any): value is WordpressColorsPresets.PresetVariables {
        return this.PresetVariablesSet.has(value);
    }

    public static getVariableNameFromVar(value: string){
        if(!this.CssVariableRegex.test(value)) return "";

        const match = this.CssVariableRegex.exec(value);
        const varName = Array.from(match || [])[1];
        
        return varName ? varName : "";
    }

    public static getColorsList(){
        return [
            {
                name: "Primary",
                color: `var(${this.Primary})`,
            },
            {
                name: "Secondary",
                color: `var(${this.Secondary})`,
            },
            {
                name: "Black",
                color: `var(${this.Black})`
            },
            {
                name: "White",
                color: `var(${this.White})`,
            },
            {
                name: "Cyan Bluish Gray",
                color: `var(${this.CyanBluishGray})`,
            },
            {
                name: "Pale Pink",
                color: `var(${this.PalePink})`,
            },
            {
                name: "Vivid Red",
                color: `var(${this.VividRed})`,
            },
            {
                name: "Luminous Vivid Orange",
                color: `var(${this.LuminousVividOrange})`,
            },
            {
                name: "Luminous Vivid Amber",
                color: `var(${this.LuminousVividAmber})`,
            },
            {
                name: "Light Green Cyan",
                color: `var(${this.LightGreenCyan})`,
            },
            {
                name: "Vivid Green Cyan",
                color: `var(${this.VividGreenCyan})`,
            },
            {
                name: "Pale Cyan Blue",
                color: `var(${this.PaleCyanBlue})`,
            },
            {
                name: "Vivid Cyan Blue",
                color: `var(${this.VividCyanBlue})`,
            },
            {
                name: "Vivid Purple",
                color: `var(${this.VividPurple})`,
            },
        ] as const satisfies ColorObject[];
    }
};

export namespace WordpressColorsPresets {
    type PresetVariablesSet = (typeof WordpressColorsPresets)["PresetVariablesSet"];
    export type PresetVariables = PresetVariablesSet extends Set<infer Presets> ? Presets : never;
}
