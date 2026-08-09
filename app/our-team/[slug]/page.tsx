import { allTeamMembers } from "@/data/teamData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = allTeamMembers.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} | Green Sky Travels`,
    description: Array.isArray(member.bio)
      ? member.bio.join(" ")
      : member.bio,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = allTeamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfefd]">
      <section className="mx-auto w-full max-w-[1020px] px-6 py-10 md:px-8 md:py-12">

        {/* Role */}
        <div>
          <p className="font-serif text-xl text-[#5fa444] md:text-[22px]">
            {member.role}
          </p>

          <div className="mt-1 h-[2px] w-[68px] bg-red-600" />
        </div>

        {/* Name */}
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#092f42] md:text-[48px]">
          {member.name}
        </h1>

        {/* Image + Bio */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[235px_1fr] md:gap-8">

          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-[235px] w-[235px] shadow-xl overflow-hidden rounded-full">
              <Image
                src={`/${member.image}`}
                alt={member.name}
                fill
                priority
                sizes="235px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Biography */}
          <div className="font-serif text-[18px] leading-[1.55] text-[#092f42] md:text-[20px]">
            {Array.isArray(member.bio) ? (
              <div className="space-y-5">
                {member.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p>{member.bio}</p>
            )}

            {/* Back button */}
            <Link
              href="/our-team"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#62ad45] px-5 py-3 font-serif text-base font-bold text-white transition-all duration-200 hover:bg-[#519638]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}