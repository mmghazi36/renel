// Import Dependencies
import { Fragment, useRef } from "react";


// Local Imports
import { InvoiceTable } from "../components/InvoiceTable";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

export default function Billing() {
  const { t } = useTranslation("translations", { keyPrefix: "pages.settings.general.billing" });

  return (
    <div className="w-full 2xl:max-w-5xl">
      <h1 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        {t("title")}
      </h1>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        {t("subtitle")}
      </p>

      <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

      <InvoiceSection />
    </div>
  );
}



function InvoiceSection() {
  return (
    <>
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          فاکتورها
        </p>
        <p className="mt-0.5 text-balance">
          لیست فاکتورها. می‌توانید آنها را مشاهده و دانلود کنید.
        </p>
      </div>
      <InvoiceTable />
    </>
  );
}

