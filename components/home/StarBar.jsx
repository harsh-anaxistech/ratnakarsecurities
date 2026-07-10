import {
  Users,
  BadgeCheck,
  Trophy,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "1 Platform",
    subtitle: "For All Investments",
  },
  {
    icon: Handshake,
    title: "Trusted By 10L+",
    subtitle: "Customers",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Leaders",
    subtitle: "Since 20+ Years",
  },
  {
    icon: Trophy,
    title: "Award-Winning",
    subtitle: "Research",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated",
    subtitle: "Personal Advisors",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-5 ">
      <div className="mx-auto  px-4">
        <div className="grid grid-cols-2 gap-y-6 py-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 px-4 lg:border-r-2 last:border-r-0 border-secondary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-light">
                  <Icon
                    className="h-8 w-8 text-secondary"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium leading-none text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-base text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}