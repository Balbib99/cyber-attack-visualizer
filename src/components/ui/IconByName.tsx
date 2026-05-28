import {
  AlertTriangle,
  Code2,
  DatabaseZap,
  DoorOpen,
  Eye,
  FileLock2,
  KeyRound,
  ListChecks,
  LockKeyhole,
  MailWarning,
  MonitorUp,
  PanelTop,
  RefreshCw,
  Route,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Shuffle,
  UploadCloud,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  AlertTriangle,
  Code2,
  DatabaseZap,
  DoorOpen,
  Eye,
  FileLock2,
  KeyRound,
  ListChecks,
  LockKeyhole,
  MailWarning,
  MonitorUp,
  PanelTop,
  RefreshCw,
  Route,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Shuffle,
  UploadCloud,
  Users,
  Wifi,
};

export function IconByName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? ShieldAlert;

  return <Icon className={className} />;
}
