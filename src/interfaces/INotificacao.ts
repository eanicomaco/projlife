export enum ClasseNotificacao {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
export default interface INotificacao {
    titulo: string;
    texto: string;
    classe: ClasseNotificacao;
    id: number;
}