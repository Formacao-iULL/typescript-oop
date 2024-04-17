import { Pessoa } from "./Pessoa";
import { Cargo } from "./Cargo";
import { IUsuario } from "../interfaces/IUsuario";

export class Funcionario extends Pessoa implements IUsuario {
    private _salario: number;
    private _cargo: Cargo | null;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, salario: number) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargo = null;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    public get cargo(): Cargo | null {
        return this._cargo;
    }

    public set cargo(value: Cargo | null) {
        this._cargo = value;
    }

    autenticar(): boolean {
        return true;
    }
}
