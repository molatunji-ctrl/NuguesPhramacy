function About() {
  return (
    <section className="bg-[#F9FCFF] min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#1B1967] sm:text-4xl">About Us</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Nuges Pharmaceuticals is committed to delivering trusted healthcare solutions with fast,
              reliable service across Egbeda and beyond.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h2 className="text-xl font-semibold text-[#23195f]">Our mission</h2>
              <p className="mt-3 text-gray-600">
                We provide quality medicines, wellness products, and pharmacist consultations that
                keep your family healthy.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h2 className="text-xl font-semibold text-[#23195f]">Our values</h2>
              <p className="mt-3 text-gray-600">
                Care, trust, and convenience guide everything we do, from product selection to
                customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
