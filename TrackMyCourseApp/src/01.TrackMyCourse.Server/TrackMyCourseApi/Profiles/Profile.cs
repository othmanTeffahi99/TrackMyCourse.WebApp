using TrackMyCourseApi.Dtos;
using trackmycourseapi.models;

namespace TrackMyCourseApi.Profiles;

public class Profile : AutoMapper.Profile
{
    public Profile()
    {
        CreateMap<Course, CourseDto>();
        CreateMap<CourseDto, Course>();
    }
}