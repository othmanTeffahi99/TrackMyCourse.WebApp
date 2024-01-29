namespace TrackMyCourseApi.Dtos;

public record CourseDto(int Id, string Name, string? Description, double? Progress, bool IsCompleted, DateTime UpdatedAt);