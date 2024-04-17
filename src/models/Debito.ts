import { Conta } from "./Conta";

export class Debito {
  private _valor: number;
  private _data: Date;
  private _conta: Conta;

  constructor(valor: number, data: Date, conta: Conta) {
    this._valor = valor;
    this._data = data;
    this._conta = conta;
  }

  public get valor(): number {
    return this._valor;
  }

  public set valor(value: number) {
    this._valor = value;
  }

  public get data(): Date {
    return this._data;
  }

  public set data(value: Date) {
    this._data = value;
  }

  public get conta(): Conta {
    return this._conta;
  }

  public set conta(value: Conta) {
    this._conta = value;
  }
}