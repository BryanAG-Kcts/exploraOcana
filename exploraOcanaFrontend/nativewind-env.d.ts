/** biome-ignore-all lint/suspicious/noExplicitAny: <Declaramos tipos en las imágenes> */
/// <reference types="nativewind/types" />

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}
