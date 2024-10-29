// pages/api/integrantes.ts
import { Integrante } from "@/types/types";

const integrantes: Integrante[] = [
    {
        id: 1,
        nome: "Igor",
        github: "https://github.com/Igorfelicori",
    },
    {
        id: 2,
        nome: "Gustavo",
        github: "https://github.com/GustavoVasconcelos045",
    },
    {
        id: 3,
        nome: "Felipe",
        github: "https://github.com/FelipeSants08",
    }
];

export default function handler(req: any, res: any) {
    res.status(200).json(integrantes);
}
