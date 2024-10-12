import obterTodos from "./usuario/obterTodos";
import salvarUsuario from "./usuario/salvarUsuario";
import excluirUsuario from "./usuario/excluirUsuario";

export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario
    }
}