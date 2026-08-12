import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type ConsultationLead = {
  name: string;
  churchName: string;
  email: string;
  phone?: string;
  message: string;
  receivedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export async function appendLeadFallback(lead: ConsultationLead): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });

  let existing: ConsultationLead[] = [];
  try {
    const raw = await readFile(LEADS_FILE, "utf8");
    existing = JSON.parse(raw) as ConsultationLead[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf8");
}
