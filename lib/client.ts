import { clients } from "@/lib/mock/clients";

export function getClientName(clientId: number) {
  return (
    clients.find((client) => client.id === clientId)?.displayName ??
    "不明"
  );
}