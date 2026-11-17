import {useState, useEffect} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {ArrowUpRight, Instagram, Menu, X, ArrowRight} from 'lucide-react';

const links = [['/', 'Início'], ['/treinos', 'Treinos'], ['/consultorias', 'Consultorias'], ['/galeria', 'Galeria'], ['/contato', 'Contato'], ['/nos-conheca', 'Nos conheça']];

export function Brand() {
    return <Link className="brand" to="/" aria-label="Drop Sports, voltar ao início"><span
        className="brand-symbol">D<span>↗</span></span><span>DROP SPORTS<span className="accent"></span><small>MOVA COM PROPÓSITO</small></span></Link>
}

export function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    useEffect(() => setOpen(false), [location]);
    return <header className="site-header">
        <div className="container nav-shell"><Brand/>
            <nav className={open ? 'nav-links open' : 'nav-links'}
                 aria-label="Navegação principal">{links.map(([to, label]) => <NavLink end={to === '/'} key={to} to={to}
                                                                                       className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
            <Link className="button button-small nav-cta" to="/contato">Começar agora <ArrowUpRight size={16}/></Link>
            <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}
                    onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </div>
    </header>
}

export function Footer() {
    const insta = import.meta.env.VITE_INSTAGRAM_USERNAME;
    const email = import.meta.env.VITE_CONTACT_EMAIL;
    return <footer className="site-footer">
        <div className="container footer-top">
            <div><Brand/><p>Movimento com propósito. Evolução com consistência.</p></div>
            <div><h4>Explore</h4>{links.slice(1).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>
            <div><h4>Entre em contato</h4><Link to="/contato">Vamos conversar <ArrowRight size={15}/></Link>{insta &&
                <a href={`https://instagram.com/${insta}`} target="_blank" rel="noreferrer"><Instagram
                    size={15}/> Instagram</a>}{email && <a href={`mailto:${email}`}>{email}</a>}</div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Drop Sports. Todos os direitos reservados.</span><span>Feito para quem não para.</span>
        </div>
    </footer>
}

export function Layout({children}) {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [pathname]);
    return <><Header/>
        <main id="conteudo">{children}</main>
        <Footer/></>
}

export function SectionHeading({eyebrow, title, description, center = false}) {
    return <div className={'section-heading' + (center ? ' center' : '')}><span className="eyebrow"><span
        className="eyebrow-line"/>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function PageHero({eyebrow, title, description}) {
    return <section className="page-hero">
        <div className="container"><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span>
            <h1>{title}</h1><p>{description}</p></div>
        <div className="page-hero-mark" aria-hidden="true">DS</div>
    </section>
}

export function CTA() {
    return <section className="cta-band">
        <div className="container cta-inner">
            <div><span className="eyebrow light"><span className="eyebrow-line"/>SEU PRÓXIMO PASSO</span><h2>O melhor
                momento para começar <em>é agora.</em></h2></div>
            <Link className="button button-dark" to="/contato">Quero começar <ArrowUpRight size={19}/></Link></div>
    </section>
}
