
import { NextResponse } from "next/server";
import { Integrante } from "./integrantes";

export async function GET() {
    return NextResponse.json(Integrante);
}