import CourseBanner from '@app/components/Course/CourseBanner'
import CourseDetails from '@app/components/Course/CourseDetails'
import LearningOutcomes from '@app/components/Course/LearningOutcomes'
import SyllabusComonent from '@app/components/Course/SyllabusComonent'
import Banner from '@app/components/Course/Banner'
import CourseSyllabus from '@app/components/Course/CourseSyllabus'
const page = () => {
  return (
    <div>
      <Banner/>
      <CourseBanner/>
      <CourseDetails/>
      <SyllabusComonent/>
      <LearningOutcomes/>
      <CourseSyllabus/>
    </div>
  )
}

export default page
