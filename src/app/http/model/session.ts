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
import { CharacterKey } from "./characterKey";
import { MemberKey } from "./memberKey";
import { NoteKey } from "./noteKey";
import { UserKey } from "./userKey";

export interface Session {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  catchphrase: string;
  scenarioName: string;
  memberIds: Array<MemberKey>;
  characterIds: Array<CharacterKey>;
  userIds: Array<UserKey>;
  noteIds: Array<NoteKey>;
}