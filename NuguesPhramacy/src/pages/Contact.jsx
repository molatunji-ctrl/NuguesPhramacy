function Contact() {
  return (
    <section className="bg-[#F9FCFF] min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#1B1967] sm:text-4xl">Contact Us</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Have questions or need assistance? Send us a message and our team will get back to you promptly.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h2 className="text-xl font-semibold text-[#23195f]">Visit us</h2>
              <p className="mt-3 text-gray-600">
                123 Egbeda Road, Lagos
              </p>
              <p className="mt-2 text-gray-600">
                Phone: +234 803 359 7959
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h2 className="text-xl font-semibold text-[#23195f]">Customer care</h2>
              <p className="mt-3 text-gray-600">
                Email us at support@nugespharmacy.com for order, product, or consultation support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
