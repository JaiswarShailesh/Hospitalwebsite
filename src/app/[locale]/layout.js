import { i18n } from "../../i18n";
import { getMessages } from "../../lib/getMessages";
import { TranslationsProvider } from "../../components/TranslationsProvider";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/footerSection";
import ComingSoonPage from "../../components/commingSoonPage";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const p = await params;

  return {
    lang: p.locale,
  };
}

export default async function LocaleLayout({ children, params }) {
  const p = await params;
  const messages = getMessages(p.locale);

  return (
    <TranslationsProvider messages={messages}>
      <ComingSoonPage />
      {/* <Navbar />
      {children}
      <FooterSection /> */}
    </TranslationsProvider>
  );
}
