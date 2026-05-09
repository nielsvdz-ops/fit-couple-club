export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import ProgramsClient from "../../components/ProgramsClient";

import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";
import { programs } from "../../lib/programsData";

function getLanguage() {
  const saved =
    cookies().get("language")?.value ||
    cookies().get("fitcouple_language")?.value ||
    cookies().get("NEXT_LOCALE")?.value ||
    "en";

  return saved === "nl" ? "nl" : "en";
}

const copy = {
  en: {
    title: "Programs",
    subtitle:
      "Structured programs with clear goals, weekly planning, training splits, and practical guidance.",
    lockTitle: "Unlock programs",
    lockText: "Programs are included with Full Access.",
    lockButton: "Upgrade to Full Access",
  },
  nl: {
    title: "Programma’s",
    subtitle:
      "Gestructureerde programma’s met duidelijke doelen, weekplanning, trainingsindeling en praktische begeleiding.",
    lockTitle: "Ontgrendel programma’s",
    lockText: "Programma’s zijn inbegrepen bij Full Access.",
    lockButton: "Upgrade naar Full Access",
  },
};

export default async function ProgramsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const language = getLanguage();
  const t = copy[language];

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title={t.title}
        subtitle={t.subtitle}
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title={t.lockTitle}
          text={t.lockText}
          requiredPlan="Full Access"
          buttonLabel={t.lockButton}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title={t.title}
      subtitle={t.subtitle}
      membershipType={profile?.membership_type}
    >
      <ProgramsClient programs={programs} />
    </DashboardLayout>
  );
}
