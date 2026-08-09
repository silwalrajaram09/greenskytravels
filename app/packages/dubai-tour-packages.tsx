import Link from "next/link";
export default function DubaiTourPackages() {
  const packages = [
    {
      name: "Dubai Premium Tour",
      link: "/packages/dubai-premium-tours",
    },
    {
      name: "Dubai Luxury Tour",
      link: "/packages/dubai-luxury-tour",
    },
    {
      name: "Dubai Desert Safari",
      link: "/packages/dubai-desert-safari",
    },
    {
      name: "Dubai City Tour",
      link: "/packages/dubai-city-tour",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dubai Tour Packages</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our exclusive Dubai tour packages designed to offer you an unforgettable experience in the city of luxury and innovation. Choose from a variety of packages that cater to different interests and budgets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{pkg.name}</h2>
            <Link href={pkg.link} className="text-primary font-semibold hover:text-green-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}