import { Usuario } from "@prisma/client";

const usuarios: Usuario[] = [
    {
        id: '1',
        email: 'ana@empresa.com.br',
        nome: 'Ana',
        senha: '123456'
    },
    {
        id: '2',
        email: 'pedro@empresa.com.br',
        nome: 'Pedro',
        senha: '123456'
    },
    {
        id: '3',
        email: 'guilherme@empresa.com.br',
        nome: 'Guilherme',
        senha: '123456'
    },
    {
        id: '1',
        email: 'augusto@empresa.com.br',
        nome: 'Augusto Pereira',
        senha: '123456'
    },
    {
        id: '1',
        email: 'amanda@empresa.com.br',
        nome: 'Amanda Souza',
        senha: '123456'
    },
    {
        id: '6',
        email: 'rebeca@empresa.com.br',
        nome: 'Rebeca Silva',
        senha: '123456'
    },
]

export default usuarios