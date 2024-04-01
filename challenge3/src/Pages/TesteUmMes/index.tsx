import './style.css';

const TesteUmMes = () => {
    return(
            <main className="main">

            <div className="header">
                <h1 className="title">Cadastrar para o teste de 1 mês</h1>
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

                    <div className="formElements">

                    <input type="text" placeholder="Cargo" />

                    <input type="text" placeholder="Nome" />
                    <br />
                    <input type="text" placeholder="Sobrenome" />

                    <input type="text" placeholder="E-mail" />
                    <br />
                    <input type="text" placeholder="Telefone Comercial" />

                    <input type="text" placeholder="Empresa" />
                    <br />
                    <input type="text" placeholder="CNPJ" />

                    <input type="text" placeholder="País" />
                    <br />
                    <input type="text" placeholder="Idioma" />


                    <div className="numberPhone">
                        <input className="DDI" type="text" placeholder="" />
                        <input className="inputNum" type="text" placeholder="Número de celular..." />
                    </div>

                    </div>

                    <div className="terms">
                        <p>Concentindo com este contrato você está de acordo com os</p>
                        <p><u><b>Termos de Politica de Privacidade</b></u> </p>

                        <p>Eu aceito receber notificações em meu e-mail e SMS. Você pode retirar essa opção de ambas as plataformas quando quiser.</p>
                    </div>

                    <div className="buttonCon">
                        <button type="button">Conectar</button>
                    </div>

                    <div className="tinyText">
                        <p className="blueText">
                            Tem uma conta?
                            <b>
                            <br />
                            <u>Conecte-se</u>
                            </b>
                        </p>
                    </div>
                </section>

                <div className="txtImg">

                    <div className="ponteImg">
                        <img className="ponte" src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/06/trailhead-mfe-background.jpg?resize=1536,468"/>
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
    )
}

export default TesteUmMes