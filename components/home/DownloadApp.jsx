import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden    ">
      <div className="mx-auto relative z-10 px-6">
        <div className="grid  items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex justify-center">
            <div className="relative h-[450px] w-full max-w-[380px] lg:h-[600px] lg:max-w-[450px]">
              <Image
                src="/images/mobile/applicationscreen.png"
                alt="Ratnakar Securities Mobile App"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-semibold leading-relaxed text-foreground md:text-4xl">
                Everything You Need to Trade, <br />
                All in One App{" "}
              </h2>

              <p className="mt-6 max-w-xl text-base  text-muted-foreground md:text-lg">
                Experience fast, secure, and seamless trading with real-time
                market updates, interactive charts, instant order execution,
                portfolio tracking, and personalized watchlists. Invest
                confidently anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#"
                className="transition duration-300 hover:-translate-y-1"
              >
                <Image
                  src="/images/mobile/googleplay.svg"
                  alt="Google Play"
                  width={180}
                  height={54}
                />
              </Link>

              <Link
                href="#"
                className="transition duration-300 hover:-translate-y-1"
              >
                <Image
                  src="/images/mobile/appstore.svg"
                  alt="App Store"
                  width={180}
                  height={54}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
