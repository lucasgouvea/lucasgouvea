import styles from '../../styles/post.module.css';
import { format } from "date-fns"

//2022 December 23, 09:18 h
export default function Post() {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <h3 className={styles.title}>#1 De quem é a culpa das demissões em massa no setor de TI?</h3>
                <h4 className={styles.date}>{format(new Date("2022-12-26T17:00:00"), 'dd/MM/yyyy - HH:mm')} h</h4>
                <div className={styles.text}>
                    <p>
                        De tempos em tempos, novas posiçōes de trabalho surgem enquanto outras se fecham. É a natureza do negócio. No entanto, o que justifica várias vagas sendo fechadas a torto e a direito, impactando uma multidão de pessoas no mundo inteiro?
                    </p>
                    <p>
                        A primeira coisa que me vem a mente, é que a conta não fecha em um monte de projeto, e se não fecha, o empregador não tem como manter as posiçōes de trabalho. É relativamente simples. O porém, é que pra algo dessa magnitude estar acontecendo, vários empregadores e capitalistas teriam que ter errado ao redor do globo sistematicamente.
                    </p>
                    <p>
                        Para entender de quem é a culpa, é necessário então entender esses erros. Vamos fazer um exercício mental:
                    </p>
                    <p>
                        Se um projeto está super-inchado, provavelmente houve uma razão para que inchasse - uma quantia enorme de dinheiro na praça para que os CEOs torrassem com suas ideias. Alguém ainda pode argumentar assim:
                    </p>
                    <p>
                        “por que pegar uma quantidade imensa de dinheiro para gastar com projetos ainda imaturos?”
                    </p>
                    <p>
                        Acredito que um um CEO, vendo seus concorrentes pegarem todo esse dinheiro para desenvolver projetos de forma demasiada, deve ser argumento suficiente para também pegar o dinheiro da praça e não ficar para trás.
                    </p>
                    <p>
                        Então, para entender o problema agora, precisamos entender qual é a razão da enorme quantidade de dinheiro na praça: governos e poupanças.

                    </p>
                    <p>
                        Para tentar contornar os temores do COVID-19, governos despejaram dinheiro. Seja com auxílios diretos a população, ou com política de juros mais baixos do que deveriam, expandindo o crédito inadvertidamente. Isso, conjuntamente com poupanças ao redor do mundo numa economia globalizada, encheu a praça de dinheiro…
                    </p>
                    <p>
                        Não dá pra atribuir a culpa de todo esse colapso à um único agente. Numa economia sistemática e complexa, fico com o conselho de Nassim Taleb: precisamos aprender com as dificuldades e volatilidades; tornarmos verdadeiramente antifrágeis à esse mundo caótico.
                    </p>
                </div>
                <p className={styles.keywords}><b>keywords:</b> economics - technology</p>
            </div >
        </div>

    )
}