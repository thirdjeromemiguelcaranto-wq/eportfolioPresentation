/* =====================================================
   YOUR CONTENT – EDIT THIS FILE
   Each line  T("Term", "Title", "Description", "Link")  is one card.
   Term must be exactly: "Prelim", "Midterm" or "Final".
   Link = Google Drive link, PDF path (e.g. "files/quiz1.pdf") or "#".
   To add an output: copy a line and edit it.
   To remove one: delete its line.
   Keep them in chronological order.
   ===================================================== */

const T = (term, title, desc, link = "#", img = "") => ({ term, title, desc, link, img });
// img = optional screenshot path, e.g. "images/activity1.png"

const DATA = {

  // 05 – Laboratory Activities
  activities: [
    T("Prelim",  "Activity 1", "Presentation tools activity output.", "files/prelim/PrelimActivityNo.1_PresentationTools_Caranto.pdf"),
    T("Prelim",  "Activity 2", "About Me activity output.", "files/prelim/PrelimActivityNo2_AboutMe.pdf"),
    T("Prelim",  "Activity 3", "Slide Master PowerPoint activity output.", "files/prelim/PrelimActivityNo.3_SlideMasterPowerPoint_Caranto.pdf"),
    T("Midterm", "Group Activity 1", "Presentation software tools group activity output.", "files/midterm/Miderm Group Activity No.1_PresentationSoftwareTool.pdf"),
    T("Final",   "Group Activity 1", "Venom Chronicles cloud computing group output.", "files/finals/FinalGroupAct1_Venom Chronicles_TOPIC 3_ CLOUD COMPUTING.pdf")
  ],

  // 06 – Quizzes
  quizzes: [
    T("Prelim",  "Quiz 1", "Preliminary quiz output.", "images/prelim/prelimQuiz1.png", "images/prelim/prelimQuiz1.png"),
    T("Prelim",  "Quiz 2", "Preliminary quiz output.", "images/prelim/prelimQuiz2.png", "images/prelim/prelimQuiz2.png"),
    T("Midterm", "Quiz 1", "Midterm quiz output.", "images/midterm/midtermQuiz1.png", "images/midterm/midtermQuiz1.png"),
    T("Final",   "Quiz 1", "Final quiz output.", "images/finals/FinalQuiz1.png", "images/finals/FinalQuiz1.png")
  ],

  // 07 – Projects
  projects: [
    T("Prelim",  "Prelim Project", "Presentation tools preliminary project output.", "files/prelim/ITC309_PRESENTATIONPRELIMPROJECT_CARANTO.pdf"),
    T("Midterm", "Midterm Project", "Venom Chronicles Alumni Management System project output.", "files/midterm/Venom Chronicles _ Alumni Management System.pdf")
  ],

  // 08 – Examinations
  exams: [
    T("Prelim", "Prelim Exam", "Preliminary exam output.", "images/prelim/PrelimExam.png", "images/prelim/PrelimExam.png")
  ]
};

// 02 – Table of Contents names (order follows the required sections)
const SECTIONS = [
  "Cover Page", "Table of Contents", "Student Profile", "Course Syllabus / Outline",
  "Classroom Activities", "Quizzes & Assessments",
  "Projects & Performance Tasks", "Examination Results", "Learning Reflection",
  "Course Learning Summary"
];
