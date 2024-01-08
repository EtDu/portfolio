import { useRouter } from 'next/router';
import Image from 'next/image';
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
      <ul className="flex flex-row">
        {projectMetadata[projectNameKey]?.images.map((image, index) => (
          <li key={index} className="flex-shrink-0 w-1/6 h-64"> {/* Adjust width as needed */}
            <div className="relative w-full h-full">
              <Image src={image.path} alt={image.alt} layout="fill" objectFit="contain" />
            </div>
          </li>
        ))}
      </ul>
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