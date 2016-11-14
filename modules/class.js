import student from './student';
import teacher from './teacher';

// teacher.add('Peter');

function add(teacherName,students) {
  teacher(teacherName);

  students.forEach(function (item) {
    student(item)
  })
}

export default add;
