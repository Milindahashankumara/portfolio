declare module "clsx" {
  type ClassValue = any;
  export default function clsx(...inputs: ClassValue[]): string;
}

declare module "tailwind-merge" {
  export function twMerge(...classes: any[]): string;
}

declare module "mini-svg-data-uri" {
  export default function svgToDataUri(svg: string): string;
}

declare module "tailwindcss/colors" {
  const colors: Record<string, any>;
  export default colors;
}

declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (palette: any) => Record<string, string>;
  export default flattenColorPalette;
}
