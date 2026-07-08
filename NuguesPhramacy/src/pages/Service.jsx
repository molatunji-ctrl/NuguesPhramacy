function Service() {
  return (
    <section className="bg-[#F9FCFF] min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold text-[#1B1967] sm:text-4xl">Services</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore our pharmacist consultations, health screenings, and support services available to every customer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Consultations", description: "Book a personal pharmacist consultation." },
            { label: "Health checks", description: "Routine screenings for your family." },
            { label: "Fast delivery", description: "On-time delivery across Egbeda." },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#23195f]">{item.label}</h2>
              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
