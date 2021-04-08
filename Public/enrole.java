public void studentInvitation() {
String courseId = "123456";
String teacherEmail = "alice@example.edu";
Teacher teacher = new Teacher().setUserId(teacherEmail);
try {
    teacher = service.courses().teachers().create(courseId, teacher).execute();
    System.out.printf("User '%s' was added as a teacher to the course with ID '%s'.\n",
            teacher.getProfile().getName().getFullName(), courseId);
} catch (GoogleJsonResponseException e) {
    GoogleJsonError error = e.getDetails();
    if (error.getCode() == 409) {
        System.out.printf("User '%s' is already a member of this course.\n", teacherEmail);
    } else {
        throw e;
    }
}
}