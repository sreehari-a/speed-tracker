export default class User {
    constructor(
      public id: number,
      public username: string,
      public email: string,
      public provider: string,
      public confirmed: boolean,
      public blocked: boolean,
      public createdAt: string,
      public updatedAt: string,
      public token: string,
    ) {}
  }
  