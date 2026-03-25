import { useEffect, useState } from "react"


interface userSummary {
    saldo: number,
    totalIncome: number,
    totalExpense: number
}
export const CardDespesas = () => {
    const [saldo, setSaldo] = useState <userSummary | null> (null)
    

    useEffect(() => {
        const fetchUserSummary = async () => {
            const token = localStorage.getItem("api_token");
            try{
                const response = await fetch( 'http://localhost:3000/transactions/summary', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                

                const result = await response.json();

                if(result.transactions){
                    const items : userSummary = result.transactions

                     setSaldo(items);
                }
               
           

            }
            catch(error){
                console.error("erro ao acessar sumario do user", error)
            }
        }
       fetchUserSummary(); 
    }, [])
    return(
        <div className="">
            <div className="flex flex-col h-50 w-80 bg-gradient-to-r from-[#F0524F] to-[#810E0E] rounded-xl border border-[#C5C5C5] overflow-hidden shadow-xl">
                <h1 className="p-4 font-bold text-2xl text-white">
                    Despesas
                </h1>

                <h1 className="p-4 mt-10 font-semibold text-xl text-white">
                    R${saldo?.totalExpense}
                </h1>
                <div className="flex items-center h-10 mt-auto bg-white px-4">
                    <p className="text-sm">
                        mais detalhes
                    </p>
                </div>
            </div>
        </div>
       
    )
}