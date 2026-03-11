"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/i18n";

type FAQItem = {
  category: string;
  q: Record<string, string>;
  a: Record<string, string>;
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { locale } = useLanguage();

  return (
    <div className="border-b border-[#e8e4df]">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors hover:opacity-70"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] sm:text-base font-medium leading-relaxed text-[#2c2c2c]">
          {t(item.q, locale)}
        </span>
        <span
          className={`mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="#2c2c2c"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#6b6560] pr-8">
            {t(item.a, locale)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const { locale } = useLanguage();
  const faq = translations.faqPage;
  const items = faq.items as FAQItem[];
  const categories = faq.categories;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categoryOrder = ["checkin", "room", "neighborhood"] as const;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // グローバルindexを追跡するカウンター
  let globalIndex = 0;

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ヘッダースペーサー（既存のナビゲーション分） */}
      <div className="pt-24 sm:pt-32" />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 pb-20 sm:pb-32">
        {/* ページヘッダー */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#b0a99f] mb-3">
            {t(faq.label, locale)}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2c2c2c] mb-3">
            {t(faq.title, locale)}
          </h1>
          <p className="text-sm sm:text-[15px] text-[#6b6560] leading-relaxed">
            {t(faq.subtitle, locale)}
          </p>
        </div>

        {/* カテゴリ別FAQ */}
        {categoryOrder.map((catKey) => {
          const catItems = items.filter((item) => item.category === catKey);
          if (catItems.length === 0) return null;

          const startIndex = globalIndex;

          return (
            <section key={catKey} className="mb-10 sm:mb-14">
              <h2 className="text-xs tracking-[0.15em] uppercase text-[#b0a99f] mb-4 sm:mb-5">
                {t(categories[catKey], locale)}
              </h2>
              <div>
                {catItems.map((item, i) => {
                  const idx = startIndex + i;
                  globalIndex = startIndex + i + 1;
                  return (
                    <AccordionItem
                      key={idx}
                      item={item}
                      isOpen={openIndex === idx}
                      onToggle={() => handleToggle(idx)}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
