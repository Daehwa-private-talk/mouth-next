declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  > & {
    title?: string;
  };

  const src: string;
  export default src;
}
