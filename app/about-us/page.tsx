export default function AboutPage() {
  return (
    <main className="bg-white text-[#092f42]">

      {/* ================= HERO ================= */}
      <section className="bg-[#f7faf5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <p className="font-serif text-lg font-semibold text-[#61a447]">
            ABOUT US
          </p>

          <div className="mt-2 h-[2px] w-16 bg-red-600" />

          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            About Green Sky Travels
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Welcome to Green Sky Travels, your trusted partner for memorable
            journeys across the UAE and around the world.
          </p>

        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 font-serif text-lg font-semibold text-[#61a447]">
              GREEN SKY TRAVELS
            </p>

            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Your Journey, Our Passion
            </h2>

            <div className="mt-4 h-[2px] w-16 bg-red-600" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Welcome to Green Sky Travels, the trusted brand name of Green
              Sky Travel and Tourism LLC. Based in Dubai, United Arab Emirates,
              and registered in both Dubai and Abu Dhabi, we are a leading
              travel and tour company dedicated to creating exceptional travel
              experiences for individuals, families, and groups from all over
              the world.
            </p>

          </div>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="bg-[#f7faf5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <p className="font-serif text-lg font-semibold text-[#61a447]">
            WHO WE ARE
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Your Local Experts in Global Travel
          </h2>

          <div className="mt-4 h-[2px] w-16 bg-red-600" />

          <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-600">
            As a Dubai-based local tour operator, Green Sky Travels takes
            pride in our deep-rooted knowledge of the UAE. Our expertise
            extends beyond the borders of the Emirates, offering personalized
            holiday packages to some of the most sought-after destinations
            worldwide. From the shimmering sands of Dubai’s deserts to the
            pristine beaches of the Maldives and the historic wonders of
            Europe, we are committed to turning your travel dreams into
            reality.
          </p>

        </div>
      </section>


      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <p className="font-serif text-lg font-semibold text-[#61a447]">
            WHAT WE OFFER
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Complete Travel Solutions
          </h2>

          <div className="mt-4 h-[2px] w-16 bg-red-600" />

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
            At Green Sky Travels, we provide a comprehensive range of
            services to ensure a seamless and memorable journey:
          </p>


          {/* UAE */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-bold">
              UAE Tour Packages
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Dubai Tour Packages",
                "Abu Dhabi Tours",
                "Adventure Tours in the UAE",
                "Luxury Tours in Dubai and Beyond",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 h-2 w-2 rounded-full bg-[#61a447]" />
                  <p className="font-semibold text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>


          {/* WORLDWIDE */}
          <div className="mt-14">

            <h3 className="font-serif text-2xl font-bold">
              Worldwide Holiday Packages
            </h3>

            <p className="mt-3 text-gray-600">
              We specialize in creating tailored travel packages for:
            </p>


            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Asia
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Nepal, India, Bhutan, Sri Lanka, Maldives, Thailand,
                  Malaysia, and more.
                </p>
              </div>


              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Europe
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Unforgettable tours across all European countries.
                </p>
              </div>


              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Africa
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Kenya, Tanzania, Rwanda, and beyond.
                </p>
              </div>


              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Americas
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Iconic destinations in North and South America.
                </p>
              </div>


              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Middle East
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Explore the rich culture of Armenia, Azerbaijan, Georgia,
                  and others.
                </p>
              </div>


              <div className="rounded-xl bg-[#f7faf5] p-6">
                <h4 className="font-serif text-xl font-bold">
                  Oceania
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Australia, New Zealand, and nearby islands.
                </p>
              </div>

            </div>

          </div>


          {/* VISA */}
          <div className="mt-14 rounded-2xl bg-[#092f42] p-8 text-white md:p-10">

            <h3 className="font-serif text-2xl font-bold">
              Visa Assistance Services
            </h3>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-300">
              Our dedicated team offers expert assistance in obtaining visas
              for the UAE and international destinations, ensuring a
              hassle-free travel experience for both residents of the UAE and
              global travelers.
            </p>

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#f7faf5] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <p className="font-serif text-lg font-semibold text-[#61a447]">
            WHY CHOOSE US?
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Travel With Confidence
          </h2>

          <div className="mt-4 h-[2px] w-16 bg-red-600" />


          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* 01 */}
            <div className="flex gap-5">
              <span className="font-serif text-4xl font-bold text-[#61a447]">
                01
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold">
                  Local Expertise
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  With a strong presence in Dubai and Abu Dhabi, we offer
                  unparalleled insights into UAE tourism.
                </p>
              </div>
            </div>


            {/* 02 */}
            <div className="flex gap-5">
              <span className="font-serif text-4xl font-bold text-[#61a447]">
                02
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold">
                  Global Reach
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  From Middle Eastern destinations to Europe, Asia, Africa,
                  and beyond, our packages cover a vast range of travel
                  interests.
                </p>
              </div>
            </div>


            {/* 03 */}
            <div className="flex gap-5">
              <span className="font-serif text-4xl font-bold text-[#61a447]">
                03
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold">
                  Personalized Service
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  We tailor every package to suit your preferences, ensuring
                  a unique and unforgettable journey.
                </p>
              </div>
            </div>


            {/* 04 */}
            <div className="flex gap-5">
              <span className="font-serif text-4xl font-bold text-[#61a447]">
                04
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold">
                  Comprehensive Travel Solutions
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  From visa processing to tour planning, we handle every
                  detail so you can travel stress-free.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION + VISION ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-10 md:grid-cols-2">

            {/* Mission */}
            <div className="border-l-4 border-[#61a447] pl-7">

              <p className="font-serif text-lg font-semibold text-[#61a447]">
                OUR MISSION
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold">
                Inspire. Connect. Deliver.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                At Green Sky Travels, our mission is to inspire, connect, and
                deliver exceptional travel experiences. We strive to combine
                professionalism with passion, offering unparalleled service
                to every client.
              </p>

            </div>


            {/* Vision */}
            <div className="border-l-4 border-[#61a447] pl-7">

              <p className="font-serif text-lg font-semibold text-[#61a447]">
                OUR VISION
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold">
                A Globally Recognized Travel Brand
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We envision becoming the leading tour operator in the UAE and
                a globally recognized name for exceptional travel services.
                Our goal is to consistently exceed expectations by providing
                innovative and sustainable travel solutions.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#092f42] py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <p className="font-serif text-lg font-semibold text-[#7fba5d]">
            LET'S PLAN YOUR NEXT ADVENTURE
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold md:text-5xl">
            Discover the World With Green Sky Travels
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover the world with Green Sky Travels. Whether you're
            exploring the vibrant cities of the UAE or embarking on an
            international journey, we are here to guide you every step of
            the way. Experience the difference with a team that genuinely
            cares about your travel aspirations.
          </p>

          <p className="mt-6 text-lg text-gray-300">
            Contact us today to start planning your next adventure. Your
            journey begins here.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-[#61a447] px-8 py-3 font-semibold text-white transition hover:bg-[#519638]"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}