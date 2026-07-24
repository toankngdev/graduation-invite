import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENT_CONFIG as PLACEHOLDER_CONFIG } from "@/data/eventConfig";
import { GUEST_LIST } from "@/data/guestList";

const getEventConfig = () => {
  if (process.env.EVENT_CONFIG_JSON) {
    try {
      return JSON.parse(process.env.EVENT_CONFIG_JSON);
    } catch (e) {
      console.error("Failed parsing EVENT_CONFIG_JSON", e);
    }
  }
  return PLACEHOLDER_CONFIG;
};

const getGuestList = () => {
  if (process.env.GUEST_LIST_JSON) {
    try {
      return JSON.parse(process.env.GUEST_LIST_JSON);
    } catch (e) {
      console.error("Failed parsing GUEST_LIST_JSON", e);
    }
  }
  return GUEST_LIST;
};

const EVENT_CONFIG = getEventConfig();
const ACTIVE_GUEST_LIST = getGuestList();

export function generateStaticParams() {
  return Object.keys(ACTIVE_GUEST_LIST).map((key) => ({
    guest: key,
  }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ guest: string }>;
}

// Generates page metadata dynamically based on guest route parameters
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guestKey = resolvedParams.guest.toLowerCase();
  const guest = ACTIVE_GUEST_LIST[guestKey];

  if (!guest) {
    return {
      title: "Guest",
    };
  }

  return {
    // Populates "%s" slot defined in root layout template
    title: guest.name,
    openGraph: {
      title: `Graduation Invitation | ${guest.name}`,
      description: `Graduation ceremony invitation for ${guest.name}.`,
    },
  };
}

export default async function FriendlyInvitation({ params }: PageProps) {
  const resolvedParams = await params;
  const guestKey = resolvedParams.guest.toLowerCase();
  const guest = ACTIVE_GUEST_LIST[guestKey];

  if (!guest) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090d16] text-[#f0f6fc] flex flex-col items-center justify-center p-4 selection:bg-[#388bfd] selection:text-white">
      <div className="w-full max-w-xl bg-[#151b26] rounded-2xl border border-[#30363d]/60 shadow-2xl overflow-hidden backdrop-blur-md">
        {/* Header Bar */}
        <div className="bg-[#0d1117] px-5 py-3.5 border-b border-[#30363d]/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
          </div>
          <span className="text-xs font-mono tracking-wider text-[#8b949e]">
            system_status: graduating //
          </span>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10 space-y-8">
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#388bfd]/10 text-[#58a6ff] px-3 py-1 rounded-full text-xs font-mono font-medium border border-[#388bfd]/20">
              <span>🚀 launch_v2026.0</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {EVENT_CONFIG.graduateName}&apos;s Graduation
            </h1>
            <p className="text-[#8b949e] font-sans text-sm md:text-base">
              {EVENT_CONFIG.major} - {EVENT_CONFIG.university}
            </p>
          </div>

          {/* Personalized Message */}
          <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#58a6ff]" />
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-[#58a6ff]">
                {"// Invitation"}
              </h3>
              <p className="text-white font-sans font-medium text-2xl">
                Hi {guest.name},
              </p>
              <p className="text-[#8b949e] font-sans text-base leading-relaxed">
                {guest.personalNote}
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-1">
              <span className="text-sm font-mono uppercase tracking-wider text-[#8b949e]">
                Time
              </span>
              <p className="text-white font-sans font-semibold text-xl">
                {EVENT_CONFIG.date}
              </p>
              <p className="text-sm text-[#8b949e] font-sans">
                {EVENT_CONFIG.time}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-mono uppercase tracking-wider text-[#8b949e]">
                Location
              </span>
              <p className="text-white font-sans font-semibold text-xl">
                {EVENT_CONFIG.venue}
              </p>
              <p className="text-sm text-[#8b949e] font-sans leading-tight">
                {EVENT_CONFIG.addressLine1}
                <br />
                {EVENT_CONFIG.addressLine2}
              </p>
            </div>
          </div>

          <div className="border-t border-[#30363d]/60 my-2" />

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-sm font-mono text-[#8b949e] text-center sm:text-left">
              {"// Agenda & Parking locations"}
            </span>
            <a
              href={EVENT_CONFIG.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium rounded-xl text-base transition-all duration-200 shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#388bfd]"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
