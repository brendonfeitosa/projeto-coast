import styles from "./Home.module.css"
import savings from '../../img/costs_logo.png'
import LinkButton from "../layouts/LinkButton"

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>
                Bem-vindo ao <span>Coast</span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img scr={savings} alt="Coast" />
        </section>
    )
}

export default Home