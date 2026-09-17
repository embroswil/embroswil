import Singleproject from "@/components/project/SingleProject";
import projectData from "@/components/project/projectData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos projets | Embroswil",
  description: "Découvrez les projets développés par embroswil : Boza et Akasa.",
  // other metadata
};

const project = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos projets"
        description="Un aperçu des produits que nous avons conçus et développés, de l'idée à la mise en production."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <Singleproject project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default project;
