import {training} from '../data/content';
import {TrainingCard} from '../components/Cards';
import {PageHero, SectionHeading, CTA} from '../components/Layout';

export default function Treinos() {
    return <><PageHero eyebrow="MODALIDADES / DROP SPORTS" title={<>SEU TREINO.<br/><em>SUA EVOLUÇÃO.</em></>}
                       description="Encontre uma modalidade alinhada ao seu objetivo e comece a construir resultados com consistência."/>
        <section className="section">
            <div className="container"><SectionHeading eyebrow="ESCOLHA SEU CAMINHO" title={<>Movimento para <span
                className="muted">cada objetivo.</span></>}
                                                       description="Conheça as modalidades disponíveis e converse com a equipe para encontrar a melhor opção."/>
                <div className="training-grid">{training.map((t, i) => <TrainingCard item={t} index={i}
                                                                                     key={t.id}/>)}</div>
            </div>
        </section>
        <CTA/></>
}
