import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

function Contact() {
  const { t } = useTranslation();

  const links = [
    {
      labelKey: 'contact.emailLabel',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
      icon: '📧',
    },
    {
      labelKey: 'contact.phoneLabel',
      value: t('contact.phone'),
      href: `tel:${t('contact.phone').replace(/\s/g, '')}`,
      icon: '📱',
    },
    {
      labelKey: 'contact.linkedinLabel',
      value: t('contact.linkedin'),
      href: `https://${t('contact.linkedin')}`,
      icon: '💼',
    },
    {
      labelKey: 'contact.githubLabel',
      value: t('contact.github'),
      href: `https://${t('contact.github')}`,
      icon: '🐙',
    },
  ];

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {t('contact.title')}
      </h2>
      <p className="text-blue-200 text-lg mb-8">{t('contact.description')}</p>
      <div className="space-y-4">
        {links.map(({ labelKey, value, href, icon }) => (
          <div key={labelKey} className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <span className="text-white/70 font-medium w-20">
              {t(labelKey)}
            </span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:underline transition-colors hover:text-white"
            >
              {value}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
