import { serviceAreas } from "@/lib/site";

export default function ServiceArea() {
  return (
    <section aria-labelledby="area-heading" className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
          Service area
        </p>
        <h2 id="area-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-4 text-balance">
          Digger work across Napier, Hastings and wider Hawke&apos;s Bay
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed mb-6 text-pretty">
          Based in Puketapu, Billy covers homes, lifestyle blocks, farms and building sites right
          across the Bay. We regularly work in {serviceAreas.slice(0, -1).join(", ")} and{" "}
          {serviceAreas[serviceAreas.length - 1]}, plus the rural areas in between.
        </p>
        <p className="text-stone-500">
          Not on the list? Give us a call, chances are we can still help.
        </p>
      </div>
    </section>
  );
}
