export abstract class Pessoa {
  protected _cpf: string;
  protected _nome: string;
  protected _telefone: string;

  constructor(cpf: string, nome: string, telefone: string) {
      this._cpf = cpf;
      this._nome = nome;
      this._telefone = telefone;
  }
}