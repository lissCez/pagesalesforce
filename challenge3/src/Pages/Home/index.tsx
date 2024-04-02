import './Hstyle.css';
import Footer from '../../Components/Footer';
import Menu from '../../Components/Menu';
import SFIMG2 from '../../assets/Group 24.png';
import SFIMG3 from '../../assets/php-products-service-generic 1.png';
import SFIMG4 from '../../assets/php-products-sales-generic 2.png';
import SFIMG5 from '../../assets/fundo 1.png';
import grupo1 from '../../assets/Group 17.png';
import grupo2 from '../../assets/Group 18.png';
import grupo3 from '../../assets/Group 19.png';
import grupo4 from '../../assets/Group 20.png';
import newsletter from '../../assets/hp-newsletter-card 1.png';
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
            <Menu/>
            <h1>Experimente o Salesforce Starter Suite gratuitamente.</h1>
            <h3>Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito. Inicie teste gratuito</h3>

            <button><Link to="/TesteUmMes">faça o teste gratuitamente</Link></button>

            <img src={SFIMG2}/>

            <section>
                <div className="cartao">
                    <h2>Pequenas empresas<h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.<a href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a></h3></h2>
                    <img src={SFIMG3}/>
                </div>
            </section>
            <section>
                <div className="cartao">
                    <h2>Pequenas empresas<h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.<a href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a></h3></h2>
                    <img src={SFIMG4}/>
                </div>
            </section>
            <section>
                <div className="cartao">
                    <h2>Pequenas empresas<h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.<a href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a></h3></h2>
                    <img src={SFIMG3}/>
                </div>
            </section>
            <section>
                <div className="cartao">
                    <h2>Pequenas empresas<h3>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.<a href='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'>Assistir a demo</a></h3></h2>
                    <img src={SFIMG4}/>
                </div>
            </section>

            <img src={SFIMG5}/>

            <section>
                <div id="gradiente">
                    <p>Afinal, que é CRM?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    <p>Encontre inovações para qualquer setor de indústria.</p>
                </div>
                <p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
            </section>
            <button><Link to= '/Quiz'>Realize um Quiz rápido e descubra qual a licença combina com a sua empresa!</Link></button>
            <div id="grupoIndustrias">
                <img src={grupo1}/>
                <img src={grupo2}/>
                <img src={grupo3}/>
                <img src={grupo4}/>
            </div>

            <div id="bfFooter">
                <p>Perguntas? <br/> fale conosco</p>
                <img src={newsletter}/>
                <button><a href='https://www.salesforce.com/br/form/contact/contactme/'>ENTRE EM CONTATO</a></button>
            </div>
            <Footer/>
        </>
    )
 }

 export default Home;