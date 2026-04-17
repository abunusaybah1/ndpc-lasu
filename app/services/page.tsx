import React from "react";
import { services } from "./Services";
import Link from "next/dist/client/link";
import { ServicesProps } from "./type";

const page: React.FC<ServicesProps> = () => {
  return (
    <section>
      <h2>Explore our services</h2>
      {services.map((service) => (
        <div key={service.id} className="">
          <h3>{service.name}</h3>
          <p>{service.desc}</p>
          <Link href={service.link}>Read more...</Link>
        </div>
      ))}
    </section>
  );
};

export default page;
