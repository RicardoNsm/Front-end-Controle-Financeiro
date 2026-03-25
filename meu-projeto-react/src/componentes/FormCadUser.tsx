import { useState, type FormEvent } from "react"

const FormCadUser = () => {
     const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [name, setName] = useState ('')

    async function click(e :FormEvent){
      e.preventDefault();
   
      if(!email || !password){
        alert("preencha todos os campos")
        return;
      }
      if(password.length < 6){
        alert('password tem que ter pelo menos 6 digitos')
      return;
      }


      try {
        const payload = {
          email: email.trim(),
          password: password.trim(),
          name: name.trim(),
        };

        console.debug('Enviando payload de cadastro:', payload);

        const resposta = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        // Log básico do response
        console.debug('Response status:', resposta.status, 'ok:', resposta.ok);

        // Tentar ler texto primeiro para garantir que obtenhamos qualquer corpo mesmo em erro 500
        const textBody = await resposta.text();
        let lerResposta: any = null;
        try {
          lerResposta = textBody ? JSON.parse(textBody) : null;
        } catch (e) {
          // corpo não é JSON
          lerResposta = { raw: textBody };
        }

        console.debug('Response body parsed:', lerResposta);

        if (!resposta.ok) {
          const msg = lerResposta?.message || lerResposta?.error || lerResposta?.raw || `Erro HTTP ${resposta.status}`;
          console.error('Erro no cadastro:', msg);
          alert(`Erro no cadastro: ${msg}`);
          return;
        }

        console.log('cadastro realizado', lerResposta);
        alert("cadastro realizado")
        setEmail('');
        setPassword('');
        setName('');
      } catch (erro) {
        console.error('erro ao conectar ao servidor', erro);
        alert('erro ao conectar ao servidor: ver console para detalhes');
      }


        }

    return(
        <form onSubmit={click} className="flex flex-col">
            <input
            type="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3  focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
            />
            <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3  focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
            />
            
            <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 mb-3 pr-10 sm:pr-12 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
            />
             <button
                type="submit"

                className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#00FF99] to-[#06412A] rounded-lg py-2 transition mt-[10px]`}
                >
                Criar Conta
                </button>
     
        </form>
    )
}

export default FormCadUser;