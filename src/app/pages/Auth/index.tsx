// Import Dependencies
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Local Imports
import Logo from "@/assets/appLogo.svg?react";
import {
  Button,
  Card,
  GhostSpinner,
  Input,
} from "@/components/ui";
import { useAuthContext } from "@/app/contexts/auth/context";
import { AuthFormValues, schema } from "./schema";
import { Page } from "@/components/shared/Page";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

// ----------------------------------------------------------------------

export default function SignIn() {
  const { t } = useTranslation("translations", { keyPrefix: "pages.auth" });
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",

    defaultValues: {
      username: "",
      password: "",
    },
  });

  const username = watch("username");
  const password = watch("password");

  const isFormFilled = Boolean(username?.trim()) && Boolean(password);

  const onSubmit = async (data: AuthFormValues) => {
    const errorKey = await login({
      username: data.username,
      password: data.password,
    });
    if (errorKey) toast.error(t(errorKey));
  };

  return (
    <Page title={t("auth.title")}>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-104 p-4 sm:px-5">
          <div className="text-center">
            <Logo className="mx-auto size-16" />
            <div className="mt-4">
              <h2 className="dark:text-dark-100 text-2xl font-semibold text-gray-600">
                {t("welcome")}
              </h2>
              <p className="dark:text-dark-300 text-gray-400">
                {t("subtitle")}
              </p>
            </div>
          </div>
          <Card className="mt-5 rounded-lg p-5 lg:p-7">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="space-y-4">
                <Input
                  label={t("username")}
                  placeholder={t("usernameHint")}
                  prefix={
                    <EnvelopeIcon
                      className="size-5 transition-colors duration-200"
                      strokeWidth="1"
                    />
                  }
                  autoComplete="username"
                  {...register("username")}
                  error={
                    errors.username?.message
                      ? t(errors.username.message)
                      : undefined
                  }
                />
                <Input
                  label={t("password")}
                  placeholder={t("passwordHint")}
                  type="password"
                  prefix={
                    <LockClosedIcon
                      className="size-5 transition-colors duration-200"
                      strokeWidth="1"
                    />
                  }
                  autoComplete="current-password"
                  {...register("password")}
                  error={
                    errors.password?.message
                      ? t(errors.password.message)
                      : undefined
                  }
                />
              </div>

              <Button
                type="submit"
                className="mt-5 w-full"
                color="primary"
                disabled={!isFormFilled || isSubmitting}
              >
                {isSubmitting && (
                  <GhostSpinner
                    variant="soft"
                    className="me-1 size-4 border-2"
                  />
                )}
                {t(isSubmitting ? "submitting" : "title")}
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </Page>
  );
}
