import { Session } from "../http";

interface DummyObject {
  isDummy: true;
}

export type DummySession = Session & DummyObject;

export function createDummySession(): DummySession {
  return {
    id: "",
    userId: "",
    name: "",
    imageUrl: "",
    description: "",
    catchphrase: "",
    scenarioName: "",
    isDummy: true
  };
}
