import {Link} from 'react-router-dom';
import {Activity, ArrowUpRight, Dumbbell, Flame, Footprints, HeartPulse, Target} from 'lucide-react';

const icons = {
    dumbbell: Dumbbell,
    activity: Activity,
    footprints: Footprints,
    flame: Flame,
    'heart-pulse': HeartPulse,
    target: Target
};

export function TrainingCard({item, index}) {
    const Icon = icons[item.icon] || Activity;
    return <article className="training-card">
        <div className="training-card-top"><span className="training-icon"><Icon size={26}
                                                                                 strokeWidth={1.6}/></span><span
            className="card-index">0{index + 1}</span></div>
        <div><span className="mini-label">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p></div>
        <Link className="card-link" to={`/contato?interesse=${encodeURIComponent(item.title)}`}
              aria-label={`Tenho interesse em ${item.title}`}><ArrowUpRight size={20}/></Link></article>
}

export function ConsultingCard({item}) {
    return <article className="consulting-card"><span className="consulting-number">{item.number} / CONSULTORIA</span>
        <h3>{item.title}</h3><p>{item.description}</p>
        <ul>{item.features.map(f => <li key={f}><span className="checkmark">↗</span>{f}</li>)}</ul>
        <Link to={`/contato?interesse=${encodeURIComponent(item.title)}`} className="text-link">Tenho
            interesse <ArrowUpRight size={18}/></Link></article>
}
