import {
  Command,
  Rss,
  ArrowRight,
  type Icon as LucideIcon,
  Twitter,
  Github,
} from 'lucide-react';

export type Icon = typeof LucideIcon;

export const Icons = {
  logo: Command,
  rss: Rss,
  arrowRight: ArrowRight,
  x: Twitter,
  github: Github,
};
