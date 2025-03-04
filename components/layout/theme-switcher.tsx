import { useTranslations } from "@/i18n/client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { MonitorIcon, MoonIcon, SunIcon as SunIconLucide } from "lucide-react";
import { useTheme } from "next-themes";
import { SunIcon } from "../icons/Sun";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="size-9 p-0"
          type="button"
          aria-label={t("theme-toggle.toggle-theme")}
          data-testid="theme-toggle"
        >
          <span className="sr-only">{t("theme-toggle.toggle-theme")}</span>
          <SunIcon />

          <MoonIcon className="hidden size-4 dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="gap-2"
          onClick={() => {
            setTheme("light");
          }}
          data-testid="theme-light-button"
        >
          <SunIconLucide className="size-[18px]" />{" "}
          {t("theme-toggle.options.light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onClick={() => {
            setTheme("dark");
          }}
          data-testid="theme-dark-button"
        >
          <MoonIcon className="size-[18px]" /> {t("theme-toggle.options.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onClick={() => {
            setTheme("system");
          }}
          data-testid="theme-system-button"
        >
          <MonitorIcon className="size-[18px]" />{" "}
          {t("theme-toggle.options.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
