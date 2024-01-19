import { ServiceTab } from "@entities/ServiceTab";

export const AllServices = () => {
  return (
    <div className="w-full bg-white mb-10">
      <section className="container">
        <ServiceTab text="Пример услуги" margin="mt-4" />
        <ServiceTab text="Пример услуги" margin="mt-4" />
        <ServiceTab text="Пример услуги" margin="mt-4" />
        <ServiceTab text="Пример услуги" margin="mt-4" />
      </section>
    </div>
  );
};
