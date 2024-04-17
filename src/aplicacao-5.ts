import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/ContaCorrente";

const cliente1 = new Cliente("53345973510", "Carina Deluca", "127489356", false);
const contaCorrente1 = new ContaCorrente("CC003", 0, cliente1);

contaCorrente1.depositar(300);

contaCorrente1.limite = 100;

const cliente2 = new Cliente("98100765432", "Victoria Hughes", "954328761", false);
const contaCorrente2 = new ContaCorrente("CC004", 0, cliente2);

contaCorrente2.depositar(100);

contaCorrente1.transferir(contaCorrente2, 1000);
