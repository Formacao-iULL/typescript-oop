import { Cliente } from "./models/Cliente";
import { Endereco } from "./models/Endereco";


const cliente = new Cliente("12345678900", "Ana Julia", "123456789", false);

const endereco1 = new Endereco("65073480", "Rua A", "123", "Avenida Principal", "São Luis", "Maranhão");
const endereco2 = new Endereco("62079798", "Rua B", "456", "Bairro B", "Bonito", "Bahia");
const endereco3 = new Endereco("62013516", "Rua C", "789", "Casa branca", "Crateús", "Ceará");

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);

console.log("Endereços do cliente:");
cliente.listarEnderecos();
