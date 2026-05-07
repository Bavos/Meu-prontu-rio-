declare module 'react' {
  export type CSSProperties = Record<string, string | number | undefined>;
  export type ReactNode = unknown;
}

declare module 'react/jsx-runtime' {
  export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string | number;
  }

  interface IntrinsicElements {
    [elementName: string]: Record<string, unknown>;
  }
}
