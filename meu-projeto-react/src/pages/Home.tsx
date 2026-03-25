"use client";
import { CardDespesas } from "../componentes/CardDespesas";
import { CardReceita } from "../componentes/CardReceita";
import { CardSaldo } from "../componentes/CardSaldo";
import Login from "../componentes/Login";

const Home = () => {
    return(
        <>
            <div className="p-10">
                <h1 className="font-bold text-2xl">
                    Visão Geral
                </h1>
                <p className="text-[#8B8B8B]">
                    aqui está o resumo dos dados gerais
                </p>
            <div className="flex gap-6 mt-8">
                
                <CardSaldo />
                <CardReceita/>
                <CardDespesas/>
            </div> 
            </div>
            
        </>
    )
} 
export default Home;