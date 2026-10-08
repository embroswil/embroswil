import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-[1000px] rounded-lg bg-white p-6 shadow-three dark:bg-gray-dark sm:p-10">
          <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Ce que nous faisons
          </h2>
          <p className="mb-8 text-base text-body-color">
            Un studio qui imagine, développe et lance ses propres produits.
          </p>
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {featuresData.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body-color">
                    {feature.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
