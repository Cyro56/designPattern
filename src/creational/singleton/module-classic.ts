interface User {
  name: string;
  age: number;
}

export class ModuleClassic {
  private static instance: ModuleClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): ModuleClassic {
    if (ModuleClassic.instance == null) {
      ModuleClassic.instance = new ModuleClassic();
    }
    return ModuleClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }
  show(): void {
    console.log(this.users);
  }
}
