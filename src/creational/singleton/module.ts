import { ModuleClassic } from "./module-classic";

export const myDatabaseClassic = ModuleClassic.getInstance();
myDatabaseClassic.add({ name: "Hero", age: 23 });
myDatabaseClassic.add({ name: "caio", age: 32 });
myDatabaseClassic.add({ name: "santos", age: 56 });
myDatabaseClassic.show();
