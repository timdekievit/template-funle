export interface IAccount {
  username: string;
  password: string;
}

export class Account implements IAccount {
  username: string;
  password: string;

  constructor(account: IAccount) {
    this.username = account.username;
    this.password = account.password;
  }
}

export interface IToken {
  token: string;
}
