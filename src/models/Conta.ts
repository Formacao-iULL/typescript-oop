import { Cliente } from "./Cliente";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
  protected _numero: string;
  protected _creditos: Credito[] = [];
  protected _debitos: Debito[] = [];
  protected _cliente: Cliente;

  constructor(numero: string, cliente: Cliente) {
    this._numero = numero;
    this._cliente = cliente;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  abstract sacar(valor: number): void;

  depositar(valor: number): void {
    const credito = new Credito(valor, new Date(), this);
    this._creditos.push(credito);
  }

  calcularSaldo(): number {
    let saldo = 0;
    for (const credito of this._creditos) {
        saldo += credito.valor;
    }
    for (const debito of this._debitos) {
        saldo -= debito.valor;
    }
    return saldo;
  }

  associarCliente(cliente: Cliente) {
    this._cliente = cliente;
  }
}
