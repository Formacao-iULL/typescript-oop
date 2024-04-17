import { Endereco } from "./Endereco";
import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";
import { IUsuario } from "../interfaces/IUsuario";

export class Cliente extends Pessoa implements IUsuario {
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._contas = [];
    }

    public get vip(): boolean {
        return this._vip;
    }

    public set vip(value: boolean) {
        this._vip = value;
    }

    listarEnderecos() {
        this._enderecos.forEach(endereco => {
            console.log(`CEP: ${endereco.cep}, Logradouro: ${endereco.logradouro}, Número: ${endereco.numero}, Complemento: ${endereco.complemento}, Cidade: ${endereco.cidade}, UF: ${endereco.uf}`);
        });
    }

    adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
        endereco.cliente = this;
    }

    listarContas() {
        this._contas.forEach(conta => {
            console.log(`Número da Conta: ${conta.numero}`);
        });
    }
    
    autenticar(): boolean {
        return true;
    }
}
