export class TesteAdd{
  static readonly type = '[ADD] add list';
  constructor(public name: string){}
}

export class TesteToggle{
  static readonly type = '[TOGLLE] toggle list';
  constructor(public id: number){}
}
