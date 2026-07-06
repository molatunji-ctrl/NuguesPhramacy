import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F9FCFF] px-4 py-8">
      <div className="flex w-full max-w-md flex-col items-center">
        <header className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1967] text-lg font-semibold text-white">
            N
          </div>
          <h3 className="text-2xl font-semibold text-[#1B1967]">Nuges Pharmaceuticals</h3>
        </header>

        <main className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-white px-8 py-8 shadow-sm">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-[#090F27]">Create your account</h1>
            <h3 className="text-sm text-[#6A7282]">
              Join us to enjoy faster checkout, order history, and exclusive offers.
            </h3>
          </div>

          <button
            type="button"
            className="flex items-center justify-center rounded-xl border border-gray-300 py-2.5 font-semibold text-[#100F27]"
          >
            Continue with Google
          </button>

          <div className="text-center text-sm text-[#6A7282]">or</div>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-[#1B1967]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-[#1B1967]"
              required
            />
            <input
              type="password"
              placeholder="Password (min 6 chars)"
              className="rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-[#1B1967]"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-[#1B1967] py-2.5 font-semibold text-white"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center justify-center gap-1">
            <h2 className="text-[14px] font-medium text-[#5B6379]">Already have an account?</h2>
            <Link to="/login" className="text-[16px] font-semibold text-[#1B1967]">
              Sign in
            </Link>
          </div>
        </main>

        <div className="mt-4 text-center">
          <Link to="/home" className="text-sm text-[#6A7282] hover:text-[#1B1967]">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignIn;