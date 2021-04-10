package invite;

public class Main{
    String courseId = "123456";
    Course course = null;
try {
        course = service.courses().get(courseId).execute();
        System.out.printf("Course '%s' found.\n", course.getName());
    } catch (GoogleJsonResponseException e) {
        GoogleJsonError error = e.getDetails();
        if (error.getCode() == 404) {
            System.out.printf("Course with ID '%s' not found.\n", courseId);
        } else {
            throw e;
        }
    }