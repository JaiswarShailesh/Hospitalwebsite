"use client";

import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
];

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  };

  return (
    <select
      value={currentLocale}
      className="ms-5"
      onChange={(e) => changeLanguage(e.target.value)}
      style={{
        padding: "4px 0px",
        fontSize: "12px",
        borderRadius: "20px",
        border: "1px solid #aaa",
        width: "75px",
        background: "#fff",
        cursor: "pointer",
        textAlign: "center",
      }}
      id="languageSelect"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
