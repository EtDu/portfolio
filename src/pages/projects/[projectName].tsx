import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { projectName } = router.query;

  return (
    <div className="flex bg-white h-full bg-opacity-80">
      boop
    </div>
  );
};

export default ProjectPage;