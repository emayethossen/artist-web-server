export interface IWorkCard {
    image: string; // URL for the background image
    title: string; // Title of the card
    tags: string[]; // Array of tags
    // createdBy: string; // Admin who created the card
    createdAt?: Date;
    updatedAt?: Date;
}
