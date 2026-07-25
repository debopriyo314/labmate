import SearchBar from "../common/SearchBar";
import FeatureCard from "../common/FeatureCard";
import { features } from "../../data/features";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-slate-900">
        🔬 LabMate
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-2xl font-semibold text-blue-600">
        Your Digital Physics Laboratory Companion
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Measure • Calculate • Learn • Record
      </p>

      {/* Search */}
      <SearchBar />

      {/* Feature Cards */}
      <div className="mt-16 grid w-full max-w-6xl gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={<Icon size={32} />}
              path={feature.path}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Hero;