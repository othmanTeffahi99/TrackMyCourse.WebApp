export interface Course {
    id: number;
    name: string;
    description: string;
    progress: number;
    isCompleted: boolean;
    isFavorite: boolean;
    updatedAt: Date;
}
