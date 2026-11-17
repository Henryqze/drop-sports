import {consulting} from '../data/content';
import {ConsultingCard} from '../components/Cards';
import {PageHero, SectionHeading, CTA} from '../components/Layout';

export default function Consultorias() {
    return <><PageHero eyebrow="ACOMPANHAMENTO / DROP SPORTS" title={<>ORIENTAÇÃO QUE<br/><em>FAZ DIFERENÇA.</em></>}
                       description="Cada jornada tem um ritmo. Descubra opções de acompanhamento para construir a sua com mais direção."/>
        <section className="section">
            <div className="container"><SectionHeading eyebrow="NOSSOS SERVIÇOS"
                                                       title={<>Escolha como <span className="muted">evoluir.</span></>}
                                                       description="As condições e a disponibilidade de cada serviço são confirmadas diretamente com o treinador."/>
                <div className="consulting-grid">{consulting.map(c => <ConsultingCard key={c.number} item={c}/>)}</div>
            </div>
        </section>
        <CTA/></>
}
