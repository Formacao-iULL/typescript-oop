import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";

const cliente = new Cliente("12345678900", "Fulano", "123456789", false);

const contaCorrente = new ContaCorrente("123456", 500, cliente);

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);

contaCorrente.sacar(50);

console.log("Saldo da Conta Corrente:", contaCorrente.calcularSaldo());
