import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaPoupanca extends Conta {

    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente);
    }

    depositar(valor: number) {
        const credito = new Credito(valor, new Date(), this);
        this._creditos.push(credito);
    }

    sacar(valor: number) {
        if (this.calcularSaldo() - valor >= 0) {
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
        return saldo;
    }
}
