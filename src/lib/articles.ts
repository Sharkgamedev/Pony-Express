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
    tag: "International Women's Day",
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
    tag: "International Women's Day",
    byline: "OWEN SILVA",
} as articlemeta;

export var iwdstatement= {
    title: "Statement from the Office of the President",
    preview: "March 8th, 2025 official statement from the Pony Planet Office of the President.",
    time: 2,
    slug: "iwd-statement",
    date: "March 8th, 2025",
    image: '/articles/statement.png',
    credit: 'Office of the President Photo',
    alt: 'Presidents Gilly and Kawasaki in Office',
    tag: "International Women's Day",
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

export var whalewar = {
    title: "EXTRAVAGANT WAR DRAGS ON INTO 7TH MONTH",
    preview: "They can barely afford to keep the lights on, but still the Whales support us with another $34 billion in aid.",
    time: 3,
    slug: "whales-support",
    date: "May 14th, 2023",
    byline: "OWEN SILVA"
} as articlemeta;

export var socialmedia = {
    title: "Social Media is singlehandedley destroying society",
    preview: "How we lost sight of what is important. And how to find it again.",
    time: 3,
    slug: "social-media",
    date: "May 14th, 2023",
    byline: "BILLIE, special to the Pony Express",
} as articlemeta;

export var normal = {
    title: "For western nations, life returns to normal",
    preview: "'Second Great Animal War' a distant memory for many",
    time: 4,
    slug: "return-normal",
    date: "October 23rd, 2023",
    byline: "JEN GRAIN",
} as articlemeta;

export var eels = {
    title: "REPORT: Eels planning to invade lobsters",
    preview: "GAOUA tries to squander fears it cannot handle a conflict with the Eels.",
    time: 4,
    slug: "eels-invade",
    date: "October 23rd, 2023",
    byline: "CHARLEIGH DRAOUI",
} as articlemeta;

export var plead = {
    title: "Horses Plead as 2nd Dinosaur Armour Division Trapped",
    preview: "Unearths memories of invasion of Meedra",
    time: 3,
    slug: "horses-plead",
    date: "October 23rd, 2023",
    byline: "OWEN SILVA",
} as articlemeta;

export var march = {
    title: "Choclate's 12-Day March to End The Civil War",
    preview: "A first hand account from a soldier that defended Pony Planet.",
    time: 5,
    slug: "12-day-march",
    date: "December 27th, 2023",
    tag: "The Pony Planet Civil War",
    byline: "JACK REACHER, special to the Pony Express",
} as articlemeta;

export var planet = {
    title: "Why is it called Pony Planet?",
    preview: "The incredible history and deep meaning of our planet's name.",
    time: 4,
    image: "/articles/horse.jpg",
    alt: "Choclate on board a Choclatebot spaceship",
    credit: "Erika Wittlieb",
    slug: "why-pony-planet",
    date: "December 27th, 2023",
    tag: "The Pony Planet Civil War",
    byline: "APPA CHERRY",
} as articlemeta;

export var civilwar = {
    title: "The Pony Planet Civil War",
    preview: "As trillions celebrate re-unification day, a brief history of the Civil War.",
    time: 8,
    slug: "history-civil-war",
    date: "December 27th, 2023",
    tag: "The Pony Planet Civil War",
    byline: "OWEN SILVA",
} as articlemeta;

export var livessaved = {
    title: "They had no escape. These volunteers created one.",
    preview: "9/11 in the nation of the United States, and the differing faces of terrorism.",
    time: 3,
    slug: "terrorism",
    date: "June 5th, 2024",
    byline: "OWEN SILVA",
} as articlemeta;

export var spiral = {
    title: "SPIRAL!",
    preview: "$PPSE closed several points below pessimistic estimations. What does it mean for the economy?",
    time: 3,
    slug: "spiral",
    date: "June 5th, 2024",
    byline: "NASH SWO",
} as articlemeta;

export var corruption = {
    title: "Choclate Moving Against the Grand Army Of the United Horses?",
    preview: "A look into disappearing military funds, and the pockets they are really going to.",
    time: 3,
    slug: "corruption",
    date: "June 5th, 2024",
    byline: "SYDNEY CHAMPAGNE, special to the Pony Express",
} as articlemeta;

