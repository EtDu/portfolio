import { useRouter } from 'next/router';
import projectMetadata from "../../app/projectMetadata.json"

type ProjectNameKey = keyof typeof projectMetadata;

const ProjectPage = () => {
  const router = useRouter();
  const { projectName } = router.query;
  const projectNameKey = projectName as ProjectNameKey;

  return (
    <div className="flex flex-col bg-white h-full bg-opacity-80 p-4">
      <h1 className="text-2xl font-bold font-fonseca">{projectMetadata[projectNameKey]?.alt}</h1>
      <a href={projectMetadata[projectNameKey]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Website
      </a>
      <section>
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{projectMetadata[projectNameKey]?.description}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p>{projectMetadata[projectNameKey]?.stack}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Features</h2>
        <ul>
          {projectMetadata[projectNameKey]?.tech.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectPage;