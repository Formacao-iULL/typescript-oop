import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";

const clienteCorrente = new Cliente("12345678977", "Maria Isabelle", "123455789", false);
const contaCorrente = new ContaCorrente("CC002", 2000, clienteCorrente);

contaCorrente.depositar(1000);

const clientePoupanca = new Cliente("98765532101", "Maya Bishop", "987654771", false);
const contaPoupanca = new ContaPoupanca("CP001", clientePoupanca);

contaPoupanca.depositar(1000);

contaCorrente.transferir(contaPoupanca, 500);

console.log("Saldo da conta corrente:", contaCorrente.calcularSaldo());
console.log("Saldo da conta poupança:", contaPoupanca.calcularSaldo());
