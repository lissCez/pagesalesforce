import { Link } from "react-router-dom";
import './style.css';
import ytImg from '../../assets/youtube.png';


const Footer = () => {
    return(
        <>
        <div id="footer">
            <section id="info">
                <h1>Information</h1>
                <Link to= '/About'>Sobre Nós</Link>
                <a href="https://www.salesforce.com/br/blog" target="_blank" rel="noopener noreferrer">Blog</a>
                <a href="https://www.salesforce.com/company/careers" target="_blank" rel="noopener noreferrer">Carreiras</a>
            </section>
            <section id="help">
                <h1>Ajuda</h1>
                <a href="https://www.salesforce.com/br/company/privacy/" target="_blank" rel="noopener noreferrer">Preferência de cookies</a>
                <a href="https://www.salesforce.com/br/company/program-agreement/" target="_blank" rel="noopener noreferrer">Termos de uso</a>
            </section>
            <section id="social">
                <div className="icon">
                    <img src="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__" alt="imagem da logo vazado do aplicativo GitHub"><a href="">Alissa</a></img>
                    <img src="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__" alt="imagem da logo vazado do aplicativo GitHub"><a href="">Mirella</a></img>
                    <img src="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__" alt="imagem da logo vazado do aplicativo GitHub"><a href="">Melissa</a></img>
                    <img src={ytImg} alt="imagem da logo vazado do aplicativo YouTube"><a href="">SheCodes</a></img>
                </div>
            </section>
        </div>
        </>
    )
}

export default Footer;