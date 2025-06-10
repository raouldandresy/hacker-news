export type ItemType = "job" | "story" | "comment" | "poll" | "pollopt";

export interface HackerNewsItem {
  id: number; // The item's unique ID
  deleted?: boolean; // True if the item is deleted
  type: ItemType; // Type of the item
  by?: string; // Username of the item's author
  time?: number; // Unix timestamp
  text?: string; // HTML content (comment, story, poll text)
  dead?: boolean; // True if the item is dead
  parent?: number; // ID of the parent item
  poll?: number; // Associated poll ID (for pollopt)
  kids?: number[]; // IDs of the item's comments
  url?: string; // URL of the story
  score?: number; // Score or votes
  title?: string; // Title (HTML)
  parts?: number[]; // Related pollopts
  descendants?: number; // Total comment count
}
