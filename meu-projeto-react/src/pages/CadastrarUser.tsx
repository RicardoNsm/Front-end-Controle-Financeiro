import FormCadUser from "../componentes/FormCadUser";

const CadastrarUser = () => {
    return(
        <>
            <div className="bg-[#EBEBEB] flex flex-col items-center justify-center w-full min-h-screen px-4">
                <h1 className="font-bold text-xl">
                    Cadastrar User
                </h1>
                <FormCadUser />
            </div>
           
        </>
    )
} 
export default CadastrarUser;