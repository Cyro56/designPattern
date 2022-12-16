import "./module";
import { ModuleClassic } from "./module-classic";

const myDatabaseClassic = ModuleClassic.getInstance();
myDatabaseClassic.add({ name: "Hena", age: 23 });
myDatabaseClassic.add({ name: "cao", age: 32 });
myDatabaseClassic.add({ name: "san", age: 56 });
myDatabaseClassic.show();
