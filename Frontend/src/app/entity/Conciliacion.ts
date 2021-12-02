export class Conciliacion {
    id_conciliacion!: number;
    fecha_final!: Date;
    saldo_extracto!: number;
    total_ingresos!: String;
    saldo_final!: String;
    id_cuenta!: String;
    total_gastos!: String;

    constructor() {}
}