import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

function About() {
  const { t } = useTranslation();

  const lists = [
    { titleKey: 'about.educationTitle', itemsKey: 'about.education' },
    { titleKey: 'about.coursesTitle', itemsKey: 'about.courses' },
    { titleKey: 'about.experienceTitle', itemsKey: 'about.experience' },
    { titleKey: 'about.hobbiesTitle', itemsKey: 'about.hobbies' },
  ];

  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {t('about.title')}
      </h2>
      <p className="text-blue-100 text-lg leading-relaxed mb-10">
        {t('about.bio')}
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-10">
        {lists.map(({ titleKey, itemsKey }) => (
          <div key={titleKey}>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">
              {t(titleKey)}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              {t(itemsKey, { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-blue-200/10 backdrop-blur-sm border-l-4 border-blue-200 rounded-xl p-6 md:p-8">
        <h3 className="text-lg font-semibold text-blue-200 mb-2">
          {t('about.lookingForTitle')}
        </h3>
        <p className="text-white/90 leading-relaxed">
          {t('about.lookingFor')}
        </p>
      </div>
    </Section>
  );
}

export default About;
