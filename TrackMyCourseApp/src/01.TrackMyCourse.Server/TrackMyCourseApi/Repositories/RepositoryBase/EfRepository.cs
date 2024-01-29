using Microsoft.EntityFrameworkCore;

namespace TrackMyCourseApi.Repositories.RepositoryBase;

public class EfRepository<T>(DbContext dbContext) : RepositoriesBase<T>(dbContext) where T : class
{
    
}