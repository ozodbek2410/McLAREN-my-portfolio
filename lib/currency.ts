const currencyByLocale: Record<string, string> = {
  uz: 'UZS',
  ru: 'RUB',
  en: 'USD'
};

export function formatMoney(amount: number, locale = 'uz') {
  const currency = currencyByLocale[locale] ?? 'UZS';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
