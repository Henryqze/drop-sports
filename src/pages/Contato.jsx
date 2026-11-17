import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {ArrowUpRight, Instagram, Mail, MessageCircle, ShieldCheck} from 'lucide-react';
import {PageHero, SectionHeading} from '../components/Layout';
import {training, consulting} from '../data/content';

export default function Contato() {
    const [params] = useSearchParams();
    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        interesse: params.get('interesse') || '',
        mensagem: '',
        consentimento: false
    });
    const [errors, setErrors] = useState('');
    const [notice, setNotice] = useState('');
    const whats = import.meta.env.VITE_WHATSAPP_NUMBER;
    const instagram = import.meta.env.VITE_INSTAGRAM_USERNAME;
    const email = import.meta.env.VITE_CONTACT_EMAIL;
    const options = [...training.map(t => t.title), ...consulting.map(c => c.title)];

    function update(e) {
        const {name, value, type, checked} = e.target;
        setForm(p => ({...p, [name]: type === 'checkbox' ? checked : value}));
        setErrors('');
        setNotice('')
    }

    function submit(e) {
        e.preventDefault();
        if (!form.nome.trim() || !form.telefone.trim() || !form.interesse) {
            setErrors('Preencha nome, telefone e modalidade de interesse.');
            return
        }
        if (!/^\+?[\d\s()\-]{10,20}$/.test(form.telefone.trim())) {
            setErrors('Informe um telefone válido com DDD.');
            return
        }
        if (!form.consentimento) {
            setErrors('É necessário autorizar o uso dos dados para contato.');
            return
        }
        if (!whats) {
            setNotice('Formulário validado! O envio ao banco de dados ainda depende da API Spring Boot. Configure VITE_WHATSAPP_NUMBER para habilitar o contato pelo WhatsApp.');
            return
        }
        const msg = `Olá! Meu nome é ${form.nome.trim()}. Tenho interesse em ${form.interesse}. Meu telefone é ${form.telefone.trim()}.${form.mensagem.trim() ? `\nMensagem: ${form.mensagem.trim()}` : ''}`;
        window.open(`https://wa.me/${whats.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
        setNotice('WhatsApp aberto. O cadastro no banco de dados será habilitado quando integrarmos a API Spring Boot.')
    }

    return <><PageHero eyebrow="CONTATO / DROP SPORTS" title={<>SEU PRÓXIMO PASSO<br/><em>COMEÇA AQUI.</em></>}
                       description="Conte um pouco sobre você e o que deseja conquistar. Vamos encontrar o melhor caminho para começar."/>
        <section className="section">
            <div className="container contact-grid">
                <div><SectionHeading eyebrow="FALE COM A GENTE"
                                     title={<>Vamos construir <span className="muted">sua evolução.</span></>}
                                     description="Preencha o formulário para preparar uma mensagem de contato com o treinador."/>
                    <div className="contact-methods">
                        <div><MessageCircle size={21}/>
                            <div>
                                <strong>WhatsApp</strong><span>{whats ? 'Converse diretamente com o treinador' : 'Número ainda não configurado'}</span>
                            </div>
                        </div>
                        <div><Instagram size={21}/>
                            <div><strong>Instagram</strong>{instagram ?
                                <a href={`https://instagram.com/${instagram}`} target="_blank"
                                   rel="noreferrer">@{instagram} <ArrowUpRight size={14}/></a> :
                                <span>Perfil a confirmar</span>}</div>
                        </div>
                        <div><Mail size={21}/>
                            <div><strong>E-mail</strong>{email ? <a href={`mailto:${email}`}>{email}</a> :
                                <span>E-mail a confirmar</span>}</div>
                        </div>
                    </div>
                </div>
                <div className="form-panel"><span className="mini-label">CADASTRO DE INTERESSE</span><h3>Vamos
                    começar?</h3>
                    <form onSubmit={submit} noValidate><label htmlFor="nome">Seu nome *</label><input id="nome"
                                                                                                      name="nome"
                                                                                                      value={form.nome}
                                                                                                          onChange={update}
                                                                                                      placeholder="Como podemos te chamar?"
                                                                                                      maxLength={100}/><label
                        htmlFor="telefone">WhatsApp com DDD *</label><input id="telefone" name="telefone"
                                                                            value={form.telefone} onChange={update}
                                                                            placeholder="(21) 99999-9999"
                                                                            inputMode="tel" maxLength={20}/><label
                        htmlFor="interesse">Qual seu interesse? *</label><select id="interesse" name="interesse"
                                                                                 value={form.interesse}
                                                                                 onChange={update}>
                        <option value="">Selecione uma opção</option>
                        {options.map(o => <option key={o} value={o}>{o}</option>)}</select><label htmlFor="mensagem">Mensagem
                        (opcional)</label><textarea id="mensagem" name="mensagem" value={form.mensagem}
                                                    onChange={update} placeholder="Conte um pouco sobre seu objetivo..."
                                                    rows={4} maxLength={500}/><label className="consent"><input
                        type="checkbox" name="consentimento" checked={form.consentimento} onChange={update}/><span>Autorizo o uso dos dados informados para receber contato sobre os serviços da Drop Sports. *</span></label>{errors &&
                        <p role="alert" className="form-error">{errors}</p>}{notice &&
                        <p role="status" className="form-notice">{notice}</p>}
                        <button type="submit"
                                className="button form-submit">{whats ? 'Conversar pelo WhatsApp' : 'Validar formulário'}
                            <ArrowUpRight size={19}/></button>
                        <p className="form-footnote"><ShieldCheck size={15}/> Nesta versão, os dados não são enviados ao
                            banco de dados.</p></form>
                </div>
            </div>
        </section>
    </>
}
