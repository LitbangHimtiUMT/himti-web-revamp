export default function FeatureList({ features }) {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6">Our Features</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
