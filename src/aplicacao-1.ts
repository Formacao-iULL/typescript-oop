import { Cargo } from "./models/Cargo";
import { Funcionario } from "./models/Funcionario";

const gerente = new Funcionario("12345678900", "Ana Julia", "123456789", false, 10000);
const cargoGerente = new Cargo("Gerente");
gerente.cargo = cargoGerente;
console.log("Gerente:", gerente);

const atendente = new Funcionario("98765432100", "Alison", "987654321", false, 5000);
const cargoAtendente = new Cargo("Atendente");
atendente.cargo = cargoAtendente;
console.log("Atendente:", atendente);