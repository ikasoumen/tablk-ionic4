/**
 * Tablk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ImageBase64 {
  data: string;
  type: ImageBase64.TypeEnum;
}
export namespace ImageBase64 {
  export type TypeEnum = "image/jpeg" | "image/png";
  export const TypeEnum = {
    Jpeg: "image/jpeg" as TypeEnum,
    Png: "image/png" as TypeEnum
  };
}
