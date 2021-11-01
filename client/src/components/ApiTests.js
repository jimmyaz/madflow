import { getCourse } from '../api';

const handleGetCourse = async () => {
  await getCourse('CS506');
};

const ApiTests = () => {
  return (
    <div>
      <div>
        <button onClick={handleGetCourse}>GET COURSE</button>
      </div>
    </div>
  );
};

export default ApiTests;