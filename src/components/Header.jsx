import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
];

function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex-1 flex items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="relative text-white font-medium tracking-wide transition-transform duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-200 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
