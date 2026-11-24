export const locales = {
  fa: {
    label: "فارسی",
    dayjs: () => import("dayjs/locale/fa"),
    flatpickr: null,
    i18n: () => import("./locales/fa/translations.json"),
    flag: "persian",
  }
};

export const supportedLanguages = Object.keys(locales);

export type LocaleCode = keyof typeof locales;

export type Dir = "rtl";
