import {Instagram, ArrowUpRight, Images} from 'lucide-react';
import {PageHero, SectionHeading, CTA} from '../components/Layout';
import { fotos } from "../data/fotos";


export default function Galeria() {
    const user = import.meta.env.VITE_INSTAGRAM_USERNAME;
    return <><PageHero eyebrow="GALERIA / DROP SPORTS" title={<>O MOVIMENTO<br/><em>NÃO PARA.</em></>}
                       description="Um espaço para compartilhar momentos, bastidores e a energia que move a Drop Sports."/>
        <section className="section">
            <div className="container">
                <div className="section-title-row"><SectionHeading eyebrow="NOSSO DIA A DIA"
                                                                   title={<>Cada treino, <span className="muted">uma história.</span></>}
                                                                   description="Em breve, publicações selecionadas do Instagram aparecerão aqui automaticamente."/>{user &&
                    <a className="text-link" href={`https://instagram.com/${user}`} target="_blank"
                       rel="noreferrer"><Instagram size={18}/> Ver Instagram <ArrowUpRight size={18}/></a>}</div>
                <div className="gallery-grid">
                    {fotos.map((foto, index) => (
                        <div
                            className={`gallery-placeholder gallery-${index + 1}`}
                            key={foto}
                        >
                            <img
                                src={foto}
                                alt={`Atividade Drop Sports ${index + 1}`}
                                className="gallery-photo"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                </div>

        </section>
        <CTA/></>

}
