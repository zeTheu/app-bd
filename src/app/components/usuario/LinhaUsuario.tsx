import { Usuario } from "@/core/model/Usuario";
import Image from "next/image";

export interface LinhaUsuarioProps {
  usuario: Usuario;
  onClick?: (usuario: Usuario) => void
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className="flex p-4 items-center gap-5 bg-zinc-900 rounded-md cursor-pointer" onClick={() => props.onClick?.(props.usuario)}>
        <Image
            src="https://loremflickr.com/80/80/cat"
            width={80}
            height={80}
            className="rounded-full"
            alt="Avatar"
        />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.usuario.nome}</span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  );
}
