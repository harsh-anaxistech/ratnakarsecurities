// import Image from "next/image";
// import Link from "next/link";
// import Container from "@/components/common/Container";
// import Button from "@/components/common/Button";
// import { TrendingUp, ShieldCheck, BadgeCheck } from "lucide-react";

// export default function HeroBanner() {
//   return (
//     <section
//       className="relative overflow-hidden py-16"
//       aria-label="Hero banner"
//     >
//       <Container className="relative z-10">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
//               Boost Your Income Today{" "}
//               <span
//                 className="relative"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, var(--primary), var(--secondary))",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Online Trading
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed lg:mx-0 mx-auto">
//               Start investing in equities, derivatives, mutual funds, currency,
//               and more through our Trading Account.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link href="/contact">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="lg"
//                   className="text-base"
//                 >
//                   Download Now
//                 </Button>
//               </Link>

//               <Link href="/about">
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="lg"
//                 >
//                   Invest Now
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative flex justify-center lg:justify-end">
//             <Image
//               src="/images/hero/hero.png"
//               alt="Trading Illustration"
//               width={650}
//               height={650}
//               priority
//               className="w-full max-w-[620px] animate-[float_5s_ease-in-out_infinite]"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      aria-label="Hero banner"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Boost Your Income Today{" "}
                Online Trading
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
              Start investing in equities, derivatives, mutual funds,
              currency, and more through our Trading Account.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  variant="contained"
                  color="primary"
                  size="lg"
                  className="text-base"
                >
                  Download Now
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="contained"
                  color="secondary"
                  size="lg"
                >
                  Invest Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}