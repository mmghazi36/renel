import { ToasterProps } from "sonner";

// Define color options
export type DarkColor = "navy";
export type LightColor = "slate";
export type PrimaryColor = "rose";
export type ThemeMode = "light" | "dark" | "system";
export type ThemeLayout = "main-layout";
export type CardSkin = "bordered";


export interface DarkColorScheme {
  name: DarkColor;
  [key: string]: string;
}

export interface LightColorScheme {
  name: LightColor;
  [key: string]: string;
}

export interface PrimaryColorScheme {
  name: PrimaryColor;
  [key: string]: string;
}

export interface Notification {
  isExpanded: boolean;
  position: ToasterProps["position"];
  visibleToasts: number;
}

export interface ThemeConfig {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  darkColorScheme: DarkColorScheme;
  lightColorScheme: LightColorScheme;
  primaryColorScheme: PrimaryColorScheme;
  notification: Notification;
  cardSkin: CardSkin;
}
