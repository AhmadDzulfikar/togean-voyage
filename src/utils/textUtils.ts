/**
 * Text utility functions for the Togean Voyage website
 */

/**
 * Truncates text to a maximum number of words and appends ellipsis if truncated.
 * @param text - The text to truncate
 * @param maxWords - Maximum number of words (default: 23)
 * @returns Truncated text with "..." if it exceeded maxWords
 */
export function truncateWords(text: string, maxWords = 23): string {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
}

/**
 * Merges multiple paragraphs into a single string, separated by spaces.
 * @param paragraphs - Array of paragraph strings
 * @returns Single merged string
 */
export function mergeParagraphs(paragraphs: string[]): string {
    return paragraphs.join(' ');
}
