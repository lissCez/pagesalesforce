import "./style.css";
import brasilia1 from "../../assets/brasilia.png";


const Teste10Minutos = () => {
  return (
    <main className="main">
      <div className="header">
        <h1 className="title">Cadastrar no teste de 10 minutos</h1>
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
        <h1 className="textForm">Nome</h1>
        <input type="text" placeholder="Digite seu nome..." />
        <h1 className="textForm">E-mail</h1>
        <input type="text" placeholder="Digite sua senha..." />

        <div className="buttonCon">
          <button type="button">Conectar</button>
        </div>

        <div className="tinyText">
          <p className="whiteText">
          Deseja se conectar em uma 
            <b>
              <br/>
              <u>conta já existente?</u>
            </b>
          </p>
        </div>

      </section>

        <div className="txtImg">

          <div className="bsbImag">
            <img className="bsb" src={brasilia1}/>
          </div>

          <div className="textBottom">
            <p><b>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</b></p>  

          <p>Com o Sales Cloud Professional Edition, você tem acesso a:</p>

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
          </div>

        </div>
    </main>
  );
};

export default Teste10Minutos;
