import Homepage from "@/components/section/Homepage";
import Project from "@/components/section/Project";
import Stories from "@/components/section/Stories";
import React from "react";

const page = () => {
  return (
    <main>
      <section id="homepage">
        <Homepage />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="stories">
        <Stories />
      </section>
    </main>
  );
};

export default page;
