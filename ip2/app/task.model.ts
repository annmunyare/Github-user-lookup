export class Task {
  public done: boolean = false;
  constructor(public description: string,public details: string,  public id: number, public priority: string) {}
}
