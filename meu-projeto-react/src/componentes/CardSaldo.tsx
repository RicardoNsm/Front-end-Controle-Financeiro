export const CardSaldo = () => {
    return(
        <div className="p-10">
            <div className="flex flex-col h-50 w-80 bg-gradient-to-r from-green-500 to-green-700 rounded-xl border overflow-hidden">
                <h1 className="p-4 font-bold text-2xl text-white">
                    Saldo
                </h1>

                <h1 className="p-4 mt-10 font-semibold text-xl text-white">
                    R$ 5.000,00
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