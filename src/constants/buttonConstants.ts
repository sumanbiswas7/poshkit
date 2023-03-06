export const colorMap = {
    red: "#E12525",
    blue: "#184DD6",
    teal: "#00A1A1",
    yellow: "#CAA23A",
    orange: "#C5461E",
};

export const btnSizeMap = {
    sm: { fontSize: 10, paddingBlock: 8, paddingInline: 13 },
    md: { fontSize: 12, paddingBlock: 10, paddingInline: 15 },
    lg: { fontSize: 14, paddingBlock: 13, paddingInline: 19 },
};

export const btnRadiusMap = {
    sm: { borderRadius: 10 },
    md: { borderRadius: 15 },
    lg: { borderRadius: 30 }
}


export type Color = "red" | "blue" | "teal" | "yellow" | "orange";
export type Size = "sm" | "md" | "lg";
export type HexColorString = `#${string}` | `#${string}${string}` | `#${string}${string}${string}${string}` | `#${string}${string}${string}${string}${string}${string}`;

export interface ColorMap {
    red: string;
    blue: string;
    teal: string;
    yellow: string;
    orange: string;
}

export interface BtnSizeMap {
    sm: {
        fontSize: number;
        paddingBlock: number;
        paddingInline: number;
    };
    md: {
        fontSize: number;
        paddingBlock: number;
        paddingInline: number;
    };
    lg: {
        fontSize: number;
        paddingBlock: number;
        paddingInline: number;
    };
}

export interface BtnRadiusMap {
    sm: { borderRadius: number };
    md: { borderRadius: number };
    lg: { borderRadius: number };
}