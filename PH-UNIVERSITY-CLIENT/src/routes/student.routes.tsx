import OfferedCourse from "../pages/faculty/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
    {
        name: "Student Dashboard",
        path:"dashboard",
        element: <StudentDashboard />
    },
    {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />
    }
    
]