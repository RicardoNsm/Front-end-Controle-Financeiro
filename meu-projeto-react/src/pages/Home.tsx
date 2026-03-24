"use client";
import { CardDespesas } from "../componentes/CardDespesas";
import { CardReceita } from "../componentes/CardReceita";
import { CardSaldo } from "../componentes/CardSaldo";
import Login from "../componentes/Login";

const Home = () => {
    return(
        <>
            <div className="flex">
                <CardSaldo />
                <CardReceita/>
                <CardDespesas/>
            </div> 
        </>
    )
} 
export default Home;