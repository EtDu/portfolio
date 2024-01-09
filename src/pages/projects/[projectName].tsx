import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import projectMetadata from "../../app/projectMetadata.json"

type ProjectNameKey = keyof typeof projectMetadata;
type ImageType = { path: string; alt: string; } | null;

const ProjectPage = () => {
  const router = useRouter();
  const { projectName } = router.query;
  const projectNameKey = projectName as ProjectNameKey;
  const scrollRef = useRef<HTMLUListElement>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 25);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="h-full bg-opacity-80 px-8 pb-16 overflow-y-auto">
      <div className="flex items-center self-center justify-center mb-6">
        <h1 className="text-3xl lg:text-5xl font-bold font-fonseca text-center mr-6">{projectMetadata[projectNameKey]?.alt}</h1>
        {projectMetadata[projectNameKey]?.url !== "" ? <a href={projectMetadata[projectNameKey]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          <div className="w-6 h-6 relative z-5">
            <Image src={"/arrow.png"} alt="website" layout="fill" objectFit="contain" />
          </div>
        </a> : <></>}
      </div>
      <ul ref={scrollRef} className="h-[300px] flex space-x-4 overflow-x-auto hide-scrollbar mb-6 shadow-xl border-2 ">
        {projectMetadata[projectNameKey]?.images.map((image, index) => (
          <li key={index} className="flex-none w-72 h-72 flex items-center justify-center">
            <button onClick={() => setSelectedImage(image)} className="">
              <Image
                src={image.path}
                alt={image.alt}
                width={300}
                height={300}
                layout="responsive"
              />

            </button>
          </li>
        ))}
      </ul>


      {
        selectedImage && (
          <div className="z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={() => setSelectedImage(null)}>
            <div className="relative w-3/4 h-3/4">
              <Image src={selectedImage.path} alt={selectedImage.alt} layout="fill" objectFit="contain" />
            </div>
          </div>
        )
      }
      <div className='w-full bg-primary-10 p-4 bg-opacity-20 shadow-xl'>
        <div className='w-full xl:w-2/3'>
          <section className='mb-6'>
            <h2 className="text-xl font-semibold font-roboto-bold">Description</h2>
            <p className="font-roboto">{projectMetadata[projectNameKey]?.description}</p>
          </section>
          <section className='mb-6'>
            <h2 className="text-xl font-semibold font-roboto-bold">Tech Stack</h2>
            <p className="font-roboto">{projectMetadata[projectNameKey]?.stack}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold font-roboto-bold">Features</h2>
            <ul>
              {projectMetadata[projectNameKey]?.tech.map((feature, index) => (
                <li key={index} className="font-roboto">{`\u{25c9} ${feature}`}</li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div >
  );
};

export default ProjectPage;