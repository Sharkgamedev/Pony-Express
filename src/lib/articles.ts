export type articlemeta = {
    title: string, // Title of the article
    preview: string, // Short description
    time: number, // Reading time
    slug: string, // URL Slug for the article
    image?: string, // URL for an image to go along with it, will be shown in social previews
    alt?: string, // Image alt text
    credit?: string // Image credit
};

// I know this is not specifically the best method of doing something like this
// (And yes I know there are plenty of 'blogging softwares' eg. wordpress, ghost, etc. out there)
// But the point with this project is just to build something simple, that works without javascript
// And as for representing the posts here, this is a way to keep all the metadata central.
// (and keep the metadata in code, see this video https://www.youtube.com/watch?v=s1ZQnS_tOg0 for a great overview of my reasons)
// The idea is that, as for the content of the articles themselves, that should be fully defined in HTML/svelte
// since that gives them the greatest possible flexibility.

export var shunned = {
    title: "She got him elected. Then she was shunned.",
    preview: "Thirty years ago, this whale helped Shamudy rise to power. This is the story of how he betrayed her.",
    time: 5,
    slug: "shamelia"
} as articlemeta;

export var cookie = {
    title: "Pres. Cookie is the single greatest threat to our freedom.",
    preview: "How mismanagement, unintelligent policy, and a lack of basic economic understanding endager us all.",
    time: 2,
    slug: "cookie-threat"
} as articlemeta;

export var lisasu = {
    title: "This company was destined to fail. She saved it.",
    preview: "A spotlight on Dr. Lisa Su, the incredible mind behind AMD's recent resurgence.",
    time: 3,
    slug: "lisa-su"
} as articlemeta;

export var iwdstatement= {
    title: "Statement from the Office of the President",
    preview: "March 8th, 2025 official statement from the Pony Planet Office of the President.",
    time: 2,
    slug: "iwd-statement",
    image: 'articles/statement.png',
    credit: 'Office of the President Photo',
    alt: 'Presidents Gilly and Kawasaki in Office',
} as articlemeta;

