import type { ClasseNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { NOTIFICAR } from "@/store/projeto-mutations";

export function useNotificacao() {

    const store = useStore();

    function notificar(titulo: string, texto: string, classe: ClasseNotificacao): void {
        store.commit(NOTIFICAR,{
            titulo, texto, classe, id: new Date().getTime()
        });
    }
    return {
        notificar
    };

}