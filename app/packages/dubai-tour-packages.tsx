import Link from "next/link";
import { MapPin } from "lucide-react";
import { dubaiNavGroups } from "@/lib/data/packageData";

export const metadata = {
  title: "Dubai Tour Packages | Green Sky Travels",
  description:
    "Explore exclusive Dubai tour packages — classic, adventure, premium, and luxury escapes with Green Sky Travels.",
};

export default function DubaiTourPackages() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 py-20 px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">Dubai Tour Packages</h1>
        <p className="mx-auto mt-4 max-w-3xl text-emerald-50">
          Explore our exclusive Dubai tour packages designed to offer you an
          unforgettable experience in the city of luxury and innovation. Choose
          from a variety of packages that cater to different interests and
          budgets.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {dubaiNavGroups.map((group) => (
          <section key={group.category} className="mb-14">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <MapPin className="h-6 w-6 text-emerald-600" />
                {group.category}
              </h2>
              <span className="text-sm font-medium text-emerald-600">
                {group.packages.length} packages
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.packages.map((pkg) => (
                <Link
                  key={pkg.link}
                  href={pkg.link}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500">
                      {group.category}
                    </span>
                    <span className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-emerald-600">
                      View Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mt-10 rounded-3xl bg-emerald-600 p-10 text-center text-white md:p-14">
          <h2 className="text-2xl font-bold md:text-3xl">
            Customize Your Dubai Experience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-50">
            Tell us your preferences and our experts will craft the perfect
            Dubai itinerary for you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}
