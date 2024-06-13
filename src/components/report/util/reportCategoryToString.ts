export default function reportCategoryToString(category: number) {
    switch (category) {
        case 0:
            return "Spam";
        default:
            return "Not available";
    }
}
