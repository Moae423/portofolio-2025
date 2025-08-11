import Homepage from "@/component/section/Homepage";
import Project from "@/component/section/Project";
import Stories from "@/component/section/Stories";
import React from "react";

const page = () => {
  return (
    <main>
      <section>
        <Homepage />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Stories />
      </section>
    </main>
  );
};

export default page;
