import CmsNotificationBar from "./CmsNotificationBar";

export default function GlobalNotificationBar(globalUI: any) {
  if (!globalUI?.global_notification) return null;
  return <CmsNotificationBar model={globalUI.global_notification} />;
}
