import Image from "next/image";

const leftItems = [
  {
    title: "Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step1.png",
    // Primary Color Theme (Slate -> Deep Blue)
    color: "bg-gradient-to-r from-slate-700 to-slate-600",
    borderColor: "border-slate-500",
    top: "top-4",
  },
  {
    title: "Strategy",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step2.png",
    color: "bg-gradient-to-r from-sky-800 to-sky-700",
    borderColor: "border-sky-600",
    top: "top-56",
  },
  {
    title: "Growth",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step3.png",
    color: "bg-gradient-to-r from-indigo-800 to-indigo-700",
    borderColor: "border-indigo-600",
    top: "bottom-4",
  },
];

const rightItems = [
  {
    title: "Team",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step4.png",
    // Secondary Color Theme (Cyan -> Lime/Emerald)
    color: "bg-gradient-to-l from-cyan-600 to-cyan-500",
    borderColor: "border-cyan-400",
    top: "top-4",
  },
  {
    title: "Partners",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step5.png",
    color: "bg-gradient-to-l from-emerald-600 to-emerald-500",
    borderColor: "border-emerald-400",
    top: "top-56",
  },
  {
    title: "Business",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    icon: "/images/steps/step6.png",
    color: "bg-gradient-to-l from-teal-600 to-teal-500",
    borderColor: "border-teal-400",
    top: "bottom-4",
  },
];

export default function Infographic() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Adjusted total height slightly to give shapes breathing room */}
        <div className="relative h-[800px] lg:h-[600px] flex items-center justify-center">

          {/* Center Octagon Circle */}
          <div className="absolute left-1/2 top-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-gradient-to-tr from-sky-500 to-cyan-400 p-2 shadow-2xl clip-path:[polygon(30%_0%,_70%_0%,_100%_30%,_100%_70%,_70%_100%,_30%_100%,_0%_70%,_0%_30%)] z-20">
            <div className="w-full h-full bg-white clip-path:[polygon(30%_0%,_70%_0%,_100%_30%,_100%_70%,_70%_100%,_30%_100%,_0%_70%,_0%_30%)] flex flex-col items-center justify-center text-center p-6">
              <div className="p-3 bg-slate-100 rounded-full mb-3 shadow-inner">
                <Image
                  src="/images/center-rocket.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-black tracking-wider text-slate-800 text-lg">
                INFOGRAPHIC
              </h3>
              <p className="text-slate-400 font-medium text-xs mt-0.5 tracking-wide uppercase">
                Your Core Vision
              </p>
            </div>
          </div>

          {/* LEFT SIDE (Primary Theme) */}
          <div className="absolute left-0 w-[45%] h-full hidden lg:block">
            {leftItems.map((item, i) => (
              <div
                key={i}
                className={`absolute right-0 ${item.top} flex items-center w-[440px] group transition-all duration-300 hover:-translate-x-2`}
              >
                {/* Text Block - Polygon Pointing Right */}
                <div
                  className={`${item.color} text-white flex-1 pl-6 pr-10 py-5 shadow-lg clip-path:[polygon(0_0,_90%_0,_100%_50%,_90%_100%,_0_100%)] z-10`}
                >
                  <h4 className="font-bold text-lg tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-100/85 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* Hexagon Icon Wrapper */}
                <div className={`w-20 h-20 -ml-6 bg-white border-4 ${item.borderColor} flex items-center justify-center shadow-md clip-path:[polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] z-20 transition-transform group-hover:scale-105`}>
                  <div className="relative w-7 h-7">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-slate-400 to-transparent -ml-2"></div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (Secondary Theme) */}
          <div className="absolute right-0 w-[45%] h-full hidden lg:block">
            {rightItems.map((item, i) => (
              <div
                key={i}
                className={`absolute left-0 ${item.top} flex items-center w-[440px] group transition-all duration-300 hover:translate-x-2`}
              >
                {/* Connecting Line */}
                <div className="w-24 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent -mr-2"></div>

                {/* Hexagon Icon Wrapper */}
                <div className={`w-20 h-20 -mr-6 bg-white border-4 ${item.borderColor} flex items-center justify-center shadow-md clip-path:[polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] z-20 transition-transform group-hover:scale-105`}>
                  <div className="relative w-7 h-7">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Block - Polygon Pointing Left */}
                <div
                  className={`${item.color} text-white flex-1 pr-6 pl-10 py-5 shadow-lg clip-path:[polygon(10%_0,_100%_0,_100%_100%,_10%_100%,_0_50%)] z-10`}
                >
                  <h4 className="font-bold text-lg tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-100/85 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Fallback Layout */}
          <div className="lg:hidden flex flex-col gap-6 mt-80 w-full px-4 z-30">
            {[...leftItems, ...rightItems].map((item, i) => (
              <div key={i} className={`${item.color} p-4 rounded-xl flex items-center gap-4 text-white shadow-md`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Image src={item.icon} alt="" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-xs opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}