import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";

const cliente = new Cliente("12345678900", "Alison Taylor", "123456762", false);

const contaCorrente = new ContaCorrente("CC001", 500, cliente);

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);

contaCorrente.sacar(50);

console.log("Saldo da Conta Corrente:", contaCorrente.calcularSaldo());
