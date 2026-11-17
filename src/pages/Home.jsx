import {Link} from 'react-router-dom';
import {ArrowRight, ArrowUpRight, ChevronDown, MoveUpRight, Play} from 'lucide-react';
import {useEffect, useState} from 'react';
import {training, consulting, faq} from '../data/content';
import {SectionHeading, CTA} from '../components/Layout';
import {TrainingCard, ConsultingCard} from '../components/Cards';
import {fotos} from "../data/fotos";

export default function Home() {
    const [expanded, setExpanded] = useState(0);
    const [inicio, setInicio] = useState(0);
    const [visivel, setVisivel] = useState(true);

    useEffect(() => {
        if (fotos.length <= 3) return;

        let timeout;

        const intervalo = setInterval(() => {
            setVisivel(false);

            timeout = setTimeout(() => {
                setInicio(atual => (atual + 1) % fotos.length);
                setVisivel(true);
            }, 500);

        }, 5000);

        return () => {
            clearInterval(intervalo);
            clearTimeout(timeout);
        };
    }, []);

    return <>
        <section className="home-hero">
            <div className="hero-grid"/>
            <div className="container hero-content"><span className="eyebrow light"><span className="eyebrow-line"/>SEU MOVIMENTO. SUA EVOLUÇÃO.</span>
                <h1>SUPERE SEUS <span>LIMITES.</span><br/>DESCUBRA SUA <em>FORÇA.</em></h1><p>Treinamento com direção,
                    acompanhamento e propósito. Sua evolução começa com o primeiro passo.</p>
                <div className="hero-actions"><Link to="/treinos" className="button">Conheça os treinos <ArrowUpRight
                    size={19}/></Link><Link to="/nos-conheca" className="button button-outline">Nossa
                    história <ArrowRight size={18}/></Link></div>
            </div>
            <div className="hero-side-label">DISCIPLINA / MOVIMENTO / RESULTADO</div>
            <div className="container hero-bottom"><span>01 — MOVIMENTO COM PROPÓSITO</span><a href="#manifesto">DESLIZE
                PARA EXPLORAR ↓</a></div>
            <div className="hero-deco" aria-hidden="true">DROP</div>
        </section>
        <div className="ticker" aria-label="Valores da Drop Sports">
            <div>DISCIPLINA <span>✳</span> MOVIMENTO <span>✳</span> CONSISTÊNCIA <span>✳</span> EVOLUÇÃO <span>✳</span> DISCIPLINA <span>✳</span> MOVIMENTO <span>✳</span>
            </div>
        </div>
        <section id="manifesto" className="section manifesto-section">
            <div className="container manifesto-grid">
                <div><span className="eyebrow"><span className="eyebrow-line"/>O NOSSO MANIFESTO</span><span
                    className="giant-outline">01</span></div>
                <div><h2>Não é só sobre treinar. <span>É sobre se transformar.</span></h2><p>Na Drop Sports, acreditamos
                    que resultados são construídos com orientação, disciplina e constância. Cada pessoa tem seu ponto de
                    partida — e cada conquista merece ser valorizada.</p><Link className="text-link" to="/nos-conheca">Conheça
                    nossa essência <ArrowUpRight size={19}/></Link></div>
            </div>
        </section>
        <section className="section section-alt">
            <div className="container"><SectionHeading eyebrow="COMO FUNCIONA" title={<>Um plano. <span
                className="muted">Um passo de cada vez.</span></>}
                                                       description="Do primeiro contato à evolução no treino, o processo é pensado para você."/>
                <div
                    className="steps-grid">{[['01', 'Conte seu objetivo', 'Fale sobre sua rotina, seu nível atual e o que deseja conquistar.'], ['02', 'Encontre seu caminho', 'Conheça as modalidades e escolha o acompanhamento mais adequado.'], ['03', 'Construa sua evolução', 'Treine com consistência e acompanhe seu progresso ao longo do tempo.']].map(([n, t, d]) =>
                    <article className="step" key={n}><span>{n}</span>
                        <div className="step-line"/>
                        <h3>{t}</h3><p>{d}</p></article>)}</div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="section-title-row"><SectionHeading eyebrow="MODALIDADES"
                                                                   title={<>Encontre seu <span className="muted">próximo desafio.</span></>}
                                                                   description="Diferentes objetivos. Um compromisso com sua evolução."/><Link
                    className="text-link" to="/treinos">Ver todos os treinos <ArrowUpRight size={18}/></Link></div>
                <div className="training-grid">{training.slice(0, 3).map((item, i) => <TrainingCard key={item.id}
                                                                                                    item={item}
                                                                                                    index={i}/>)}</div>
            </div>
        </section>
        <section className="feature-split">
            <div className="feature-art">
                <div className="art-orbit orbit-one"/>
                <div className="art-orbit orbit-two"/>
                <span>MOVE<br/>WITH<br/><b>PURPOSE.</b></span></div>
            <div className="feature-copy"><span className="eyebrow light"><span className="eyebrow-line"/>TREINE DO SEU JEITO</span>
                <h2>SEU OBJETIVO.<br/><em>SEU RITMO.</em><br/>SUA EVOLUÇÃO.</h2><p>Seja para ganhar força, melhorar o
                    condicionamento ou criar uma rotina mais ativa, existe um caminho possível para você.</p><Link
                    className="button" to="/contato">Fale com a gente <ArrowUpRight size={19}/></Link></div>
        </section>
        <section className="section section-alt">
            <div className="container"><SectionHeading eyebrow="ACOMPANHAMENTO"
                                                       title={<>Consultoria que acompanha <span className="muted">sua jornada.</span></>}
                                                       description="Conheça opções de orientação e encontre a que combina com sua rotina."/>
                <div className="consulting-grid">{consulting.map(c => <ConsultingCard key={c.number} item={c}/>)}</div>
            </div>
        </section>
        <section className="section about-teaser">
            <div className="container about-teaser-grid">
                <div><span className="eyebrow"><span className="eyebrow-line"/>QUEM SOMOS</span><h2>POR TRÁS DE CADA
                    EVOLUÇÃO, <em>EXISTE UM PROPÓSITO.</em></h2><p>Mais do que séries e repetições: uma abordagem que
                    valoriza pessoas, histórias e conquistas.</p><Link className="text-link" to="/nos-conheca">Nos
                    conheça <ArrowUpRight size={18}/></Link></div>
                <div className="about-placeholder"><img
                    src="/images/imagemdrop.png"
                    alt=" Drop Sports"
                    className="trainer-photo"
                /></div>
            </div>
        </section>
        <section className="section section-alt">
            <div className="container">
                <div className="section-title-row"><SectionHeading eyebrow="GALERIA"
                                                                   title={<>Movimento em <span className="muted">cada detalhe.</span></>}
                                                                   description="Um espaço para registrar treinos, bastidores e conquistas."/><Link
                    className="text-link" to="/galeria">Explorar galeria <ArrowUpRight size={18}/></Link></div>
                <div className={`gallery-preview ${visivel ? "fade-in" : "fade-out"}`}>
                    {Array.from(
                        {length: Math.min(3, fotos.length)},
                        (_, index) => {
                            const foto = fotos[(inicio + index) % fotos.length];

                            return (
                                <div
                                    className={`gallery-placeholder gallery-${index + 1}`}
                                    key={index}
                                >
                                    <img
                                        src={foto}
                                        alt={`Atividade Drop Sports ${index + 1}`}
                                        className="gallery-photo"
                                    />
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container faq-grid"><SectionHeading eyebrow="DÚVIDAS FREQUENTES"
                                                                title={<>Tudo começa com <span className="muted">uma pergunta.</span></>}
                                                                description="Algumas respostas para ajudar você a dar o primeiro passo."/>
                <div className="faq-list">{faq.map((f, i) => <div className="faq-item" key={f.q}>
                    <button onClick={() => setExpanded(expanded === i ? -1 : i)} aria-expanded={expanded === i}>
                        <span>{f.q}</span><ChevronDown size={19} className={expanded === i ? 'rotated' : ''}/></button>
                    {expanded === i && <p>{f.a}</p>}</div>)}</div>
            </div>
        </section>
        <CTA/>
    </>;
}
