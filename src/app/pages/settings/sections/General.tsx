// Import Dependencies
import { PhoneIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";

// Local Imports
import { PreviewImg } from "@/components/shared/PreviewImg";
import { Avatar, Button, Input, Upload } from "@/components/ui";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

export default function General() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const { t } = useTranslation("translations", { keyPrefix: "pages.settings.general" });


  return (
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        {t("title")}
      </h5>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        {t("subtitle")}
      </p>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />
      <div className="mt-4 flex flex-col space-y-1.5">
        <span className="dark:text-dark-100 text-base font-medium text-gray-800">
          {t("avatar")}
        </span>
        <Avatar
          size={20}
          imgComponent={PreviewImg}
          imgProps={{ file: avatar } as any}
          src="/images/avatar/avatar-20.jpg"
          classNames={{
            root: "ring-primary-600 dark:ring-primary-500 dark:ring-offset-dark-700 rounded-xl ring-offset-[3px] ring-offset-white transition-all hover:ring-3",
            display: "rounded-xl",
          }}
          indicator={
            <div className="dark:bg-dark-700 absolute right-0 bottom-0 -m-1 flex items-center justify-center rounded-full bg-white">
              {avatar ? (
                <Button
                  onClick={() => setAvatar(null)}
                  isIcon
                  className="size-6 rounded-full"
                >
                  <XMarkIcon className="size-4" />
                </Button>
              ) : (
                <Upload
                  name="avatar"
                  onChange={(files) => setAvatar(files[0])}
                  accept="image/*"
                >
                  {({ ...props }) => (
                    <Button isIcon className="size-6 rounded-full" {...props}>
                      <HiPencil className="size-3.5" />
                    </Button>
                  )}
                </Upload>
              )}
            </div>
          }
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 [&_.prefix]:pointer-events-none">
        <Input
          placeholder={t("nameHint")}
          label={t("name")}
          className="rounded-xl"
          prefix={<UserIcon className="size-4.5" />}
        />
        <Input
          placeholder={t("mailHint")}
          label={t("mail")}
          className="rounded-xl"
          prefix={<EnvelopeIcon className="size-4.5" />}
        />
        <Input
          placeholder={t("phoneHint")}
          label={t("phone")}
          className="rounded-xl"
          prefix={<PhoneIcon className="size-4.5" />}
        />
      </div>
      <div className="dark:bg-dark-500 my-7 h-px bg-gray-200" />
      <div className="mt-8 flex justify-end space-x-3">
        <Button className="min-w-[7rem]">{t("cancel")}</Button>
        <Button className="min-w-[7rem]" color="primary">
          {t("submit")}
        </Button>
      </div>
    </div>
  );
}
