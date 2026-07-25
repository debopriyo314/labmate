import SearchBar from "./SearchBar";
import FeatureCard from "./FeatureCard";
import { Calculator } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-slate-900">
        LabMate
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-2xl font-semibold text-blue-600">
        Your Digital Physics Laboratory Companion
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Everything you need for your Physics Laboratory in one place.
      </p>

      {/* Search Bar */}
      <SearchBar />

      {/* One Feature Card (Testing) */}
      <div className="mt-16 w-full max-w-md">
        <FeatureCard
          title="Lab Tools"
          description="Vernier, Screw Gauge, DMS Calculator and more."
          icon={<Calculator size={34} />}
        />
      </div>
    </section>
  );
}

export default Hero;