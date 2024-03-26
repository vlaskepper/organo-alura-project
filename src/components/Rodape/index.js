import './Rodape.css';

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="imagem do logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="imagem do logo do X/Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="imagem do logo do Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="logo do Organo" />
        </section>
        <section>
            <p>
                Feito por Vinícius Luiz.
            </p>
        </section>
    </footer>
    );
}

export default Rodape;