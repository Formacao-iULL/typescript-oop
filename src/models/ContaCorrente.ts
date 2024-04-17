import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Debito } from "./Debito";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, limite: number, cliente: Cliente) {
        super(numero, cliente);
        this._limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void {
        const saldoComLimite = this.calcularSaldo() + this._limite;
        if (saldoComLimite - valor >= 0) {
            const debito = new Debito(valor, new Date(), this);
            this._debitos.push(debito);
            contaDestino.depositar(valor);
        } else {
            console.log("Saldo insuficiente para realizar a transferência.");
        }
    }

    sacar(valor: number): void {
        const saldoComLimite = this.calcularSaldo() + this._limite;
        if (saldoComLimite - valor >= 0) {
            const debito = new Debito(valor, new Date(), this);
            this._debitos.push(debito);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    calcularSaldo(): number {
        let saldo = 0;
        for (const credito of this._creditos) {
            saldo += credito.valor;
        }
        for (const debito of this._debitos) {
            saldo -= debito.valor;
        }
        saldo += this._limite;
        return saldo;
    }
}
