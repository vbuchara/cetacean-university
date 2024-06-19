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

    private static readonly ColorsMap = new Map<string, string>([
        [this.Black, "#000000"],
        [this.CyanBluishGray, "#abb8c3"],
        [this.White, "#ffffff"],
        [this.PalePink, "#f78da7"],
        [this.VividRed, "#cf2e2e"],
        [this.LuminousVividOrange, "#ff6900"],
        [this.LuminousVividAmber, "#fcb900"],
        [this.LightGreenCyan, "#7bdcb5"],
        [this.VividGreenCyan, "#00d084"],
        [this.PaleCyanBlue, "#8ed1fc"],
        [this.VividCyanBlue, "#0693e3"],
        [this.VividPurple, "#9b51e0"],
        [this.Primary, "#115a82"],
        [this.Secondary, "#86c4da"],
    ]);

    public static getColor(name: WordpressColorsPresets.PresetVariables): string;
    public static getColor(name: string): string | undefined;

    public static getColor(name: string): string | undefined {
        return this.ColorsMap.get(name);
    }

    public static getColorsList(){
        return [
            {
                name: "Primary",
                color: this.getColor(this.Primary),
            },
            {
                name: "Secondary",
                color: this.getColor(this.Secondary),
            },
            {
                name: "Black",
                color: this.getColor(this.Black)
            },
            {
                name: "White",
                color: this.getColor(this.White),
            },
            {
                name: "Cyan Bluish Gray",
                color: this.getColor(this.CyanBluishGray),
            },
            {
                name: "Pale Pink",
                color: this.getColor(this.PalePink),
            },
            {
                name: "Vivid Red",
                color: this.getColor(this.VividRed),
            },
            {
                name: "Luminous Vivid Orange",
                color: this.getColor(this.LuminousVividOrange),
            },
            {
                name: "Luminous Vivid Amber",
                color: this.getColor(this.LuminousVividAmber),
            },
            {
                name: "Light Green Cyan",
                color: this.getColor(this.LightGreenCyan),
            },
            {
                name: "Vivid Green Cyan",
                color: this.getColor(this.VividGreenCyan),
            },
            {
                name: "Pale Cyan Blue",
                color: this.getColor(this.PaleCyanBlue),
            },
            {
                name: "Vivid Cyan Blue",
                color: this.getColor(this.VividCyanBlue),
            },
            {
                name: "Vivid Purple",
                color: this.getColor(this.VividPurple),
            },
        ] as const satisfies ColorObject[];
    }
};

export namespace WordpressColorsPresets {
    export type PresetVariables = Extract<ValueOf<typeof WordpressColorsPresets>, string>;;
}
