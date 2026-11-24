// Import Dependencies
import { useState } from "react";
import { toast } from "sonner";

// Local Imports
import { Checkbox } from "@/components/ui";
import { useListState } from "@/hooks";
import { StyledSwitch } from "@/components/shared/form/StyledSwitch";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

interface NotificationItem {
  id: string;
  label: string;
  description: string;
  editable: boolean;
  enabled: boolean;
}

export default function Notifications() {
  const { t } = useTranslation("translations", {
    keyPrefix: "pages.settings.general.notifications",
  });

  return (
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h1 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        {t("title")}
      </h1>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        {t("subtitle")}
      </p>
    </div>
  );
}

function NotificationItem({
  label,
  description,
  editable,
  enabled,
  onChange,
  index,
}: NotificationItem & {
  index: number;
  onChange: (value: boolean, index: number) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleChange = (value: boolean) => {
    setLoading(true);
    setTimeout(() => {
      onChange(value, index);
      toast.success("تغییرات شما ذخیره شد");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="dark:border-dark-500 flex items-center justify-between space-x-3 rounded-lg border border-gray-200 p-4">
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          {label}
        </p>
        <p className="mt-0.5 text-balance">{description}</p>
      </div>
      <StyledSwitch
        size={6}
        checked={enabled}
        onChange={handleChange}
        disabled={editable}
        loading={loading}
      />
    </div>
  );
}
