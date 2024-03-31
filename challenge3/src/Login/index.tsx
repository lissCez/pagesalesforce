import "./style.css";
import rjImg from "../../src/assets/rjImg.png";


const Login = () => {
  return (
    <main className="main">
      <div className="header">
        <h1 className="title">Conecte-se</h1>
        <img
          className="salesforceIcon"
          src="https://s3-alpha-sig.figma.com/img/f5c8/f589/8f1f6c8c9c01c05d5bcb823b41443f59?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsCJJ7dGc0gUAJpGXbBWD-L70ri3MJj57qbZab9YfsgiDzCg4sqMnJ39OmndyC4vc6xEz8gvf3RS4GujQJTIlQVaTwPcibdI3eesw4FdZ1CMA97ywkKs0I~qrbegEXpQ7tbRtKlacfqMPvPBDRkCzzOGYaW8RINM1HCIY~8yZpkr87DZG-GVPe7iW5Cy0IJuUXhRYmzphqFhKJMr9AmkWunjqN7jDDR8lAoTtAvFVSq82V2qXN~YMC60WwAHTRglU~GTOYLWkFJUyLNmI0bJo3oL9ddRSh3Uyb1mwYRGhm8YP4QwMxokO7gC1d5t9ifRlcQVPAEZLANEByapJ2k8hA__"
          alt=""
        />
      </div>

      <div className="textBold">
        <p>
          Preencha os campos abaixo com suas informações
        </p>
      </div>

      <section className="forms">
        <h1 className="textForm">Usuário</h1>
        <input type="text" placeholder="Digite seu nome..." />
        <h1 className="textForm">Senha</h1>
        <input type="password" placeholder="Digite sua senha..." />
        <div className="tinyText">
          <h4>Esqueceu sua senha?</h4>
        </div>

        <div className="buttonCon">
          <button type="button">Conectar</button>
        </div>

        <div className="tinyText">
          <p className="grayText">
            Não tem uma conta?
            <b>
              <br />
              <u>Cadastre-se</u>
            </b>
          </p>
        </div>

      </section>

          

        <div className="txtImg">

          <div className="rjImag">
            <img className="Rj" src={rjImg}/>
          </div>

          <div className="textBottom">
            <p  className="whiteText"><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>
            
            <p  className="whiteText">Com o Sales Cloud Professional Edition, você tem acesso a:</p>

            <ul>
              <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
              <li>Processos, relatórios e dashboards pré-configurados;</li>
              <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
              <li>Guias e outros materiais sobre boas práticas de vendas;</li>
              <li>Onboarding integrado, treinamentos e webinars online;</li>
              <li>Configuração de pontuação e roteamento de leads;</li>
              <li>Ferramentas para automação de tarefas recorrentes;</li>
              <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
            </ul>

            <p className="whiteText"> <b>Dúvidas? Entre em contato e fale com um de nossos especialistas: 0800 891 1887.</b></p>
          </div>


        </div>
    </main>
  );
};

export default Login;