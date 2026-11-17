import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {PageHero, SectionHeading, CTA} from '../components/Layout';

export default function NosConheca() {
    return <><PageHero eyebrow="NOSSA ESSÊNCIA / DROP SPORTS" title={<>MUITO ALÉM<br/><em>DO TREINO.</em></>}
                       description="Conheça a filosofia por trás da Drop Sports: movimento, compromisso e evolução constante."/>
        <section className="section">
            <div className="container about-full-grid">
                <div className="about-photo"><img
                    src="/images/imagemtreinador.png"
                    alt="Treinador da Drop Sports"
                    className="trainer-photo"
                /></div>
                <div><SectionHeading eyebrow="NOS CONHEÇA" title={<>Treinar é um começo. <span className="muted">Evoluir é a jornada.</span></>}/>
                    <p>Na Drop Sports, acreditamos no poder do movimento como parte de uma vida mais ativa e consciente.
                        Nossa proposta é oferecer orientação para quem deseja começar, recomeçar ou buscar novos
                        desafios.</p><p>Valorizamos o compromisso com cada etapa do processo, respeitando a
                        individualidade, a rotina e os objetivos de quem treina.</p>
                    <div className="bio-notice"><strong>Sobre o profissional</strong><span>Muito além do treino. Ciência, estratégia e evolução.
Acredito que o verdadeiro desempenho esportivo começa com a compreensão do corpo, da mente e do movimento.
Minha atuação na Educação Física é fundamentada em três áreas essenciais: Fisiologia do Exercício, Psicologia do Esporte e Cinesiologia e Biomecânica do Exercício. Essa combinação permite desenvolver uma abordagem integrada, que considera não apenas a capacidade física, mas também os aspectos mentais e a qualidade dos movimentos.
Por meio da Fisiologia do Exercício, busco compreender as respostas e adaptações do organismo ao treinamento. Com a Psicologia do Esporte, valorizo fatores como motivação, disciplina, confiança e preparação mental. Já a Cinesiologia e a Biomecânica contribuem para uma análise mais precisa dos movimentos, favorecendo a eficiência técnica e a individualização dos exercícios.
Meu compromisso é transformar conhecimento científico em estratégias de treinamento personalizadas, respeitando as necessidades, os limites e os objetivos de cada pessoa.
Na Drop Sports, acredito que evoluir não é apenas alcançar resultados, mas construir uma trajetória de desenvolvimento físico e mental com propósito, segurança e consistência.
DROP SPORTS — Ciência aplicada ao movimento. Evolução construída com propósito.</span>
                    </div>
                    <Link to="/contato" className="button">Vamos conversar <ArrowUpRight size={18}/></Link></div>
            </div>
        </section>
        <section className="section section-alt">
            <div className="container"><SectionHeading eyebrow="NOSSOS PILARES"
                                                       title={<>O que nos <span className="muted">move.</span></>}/>
                <div
                    className="steps-grid">{[['01', 'Propósito', 'Cada treino tem um motivo e cada pessoa tem sua própria meta.'], ['02', 'Consistência', 'A evolução é construída com dedicação e passos possíveis.'], ['03', 'Respeito ao processo', 'O caminho importa tanto quanto o resultado.']].map(([n, t, d]) =>
                    <article className="step" key={n}><span>{n}</span>
                        <div className="step-line"/>
                        <h3>{t}</h3><p>{d}</p></article>)}</div>
            </div>
        </section>
        <CTA/></>
}
