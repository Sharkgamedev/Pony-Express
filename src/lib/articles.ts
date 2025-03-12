export type articlemeta = {
    title: string, // Title of the article
    preview: string, // Short description
    time: number, // Reading time
    slug: string, // URL Slug for the article
    date: string, // Publication date
    byline: string, // Byline for article
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
    slug: "shamelia",
    date: "March 8th, 2025",
    byline: "CRIS GREAN",
} as articlemeta;

export var cookie = {
    title: "Pres. Cookie is the single greatest threat to our freedom.",
    preview: "How mismanagement, unintelligent policy, and a lack of basic economic understanding endager us all.",
    time: 2,
    slug: "cookie-threat",
    date: "December 30th, 2022",
    byline: "SPRITE THORN",
} as articlemeta;

export var lisasu = {
    title: "This company was destined to fail. She saved it.",
    preview: "A spotlight on Dr. Lisa Su, the incredible mind behind AMD's recent resurgence.",
    time: 3,
    slug: "lisa-su",
    date: "March 8th, 2025",
    byline: "OWEN SILVA",
} as articlemeta;

export var iwdstatement= {
    title: "Statement from the Office of the President",
    preview: "March 8th, 2025 official statement from the Pony Planet Office of the President.",
    time: 2,
    slug: "iwd-statement",
    date: "March 8th, 2025",
    image: 'articles/statement.png',
    credit: 'Office of the President Photo',
    alt: 'Presidents Gilly and Kawasaki in Office',
    byline: "OFFICE OF THE PRESIDENT",
} as articlemeta;

export var draft = {
    title: "REPORT: Shamudy is considering a draft",
    preview: "The highly unpopular move would constitute the first time in the history of the Whales a draft was instated.",
    time: 3,
    slug: "draft",
    date: "December 30th, 2022",
    byline: "FIONA THORNTON and OWEN SILVA"
} as articlemeta;

export var moose = {
    title: "Outrage as Moose agree to negotiations.",
    preview: "A unanimous vote within the GAOUA declined their offer on Friday. 50k soldiers remain trapped on the Moose home planet, Meedra.",
    time: 5,
    slug: "moose",
    date: "December 30th, 2022",
    byline: "field reporter TRICERY"
} as articlemeta;

export var thought = {
    title: "OPINION: The decline of independent thought",
    preview: "Independent thought has been systematically scraped away. Et la pièce de résistance? Nobody even noticed.",
    time: 4,
    slug: "thought",
    date: "May 14th, 2023",
    byline: "OWEN SILVA"
} as articlemeta;

