/**
    *
    * This has been brought over (un)touched from the original Pony Express
    *
**/

const getPrefix = (i: number, words: string[]) =>
    (i == 0 || words[i - 1] == ' ') ? '' : ' '; // No previous char

export async function translate() {
    let dictionary = await import('$lib/dictionary.js');

    document.querySelectorAll('p, h2, h1, h3, strong, h4, li, figure').forEach((el: Element) => {
        const elm = el as HTMLElement;
        const words = elm.innerText.split(' ');
        let output = '';

        for (let i = 0; i < words.length; i++) {
            let element = filterPunctuation(words[i]);
            output += getPrefix(i, words) + findValueByKey(element[0], dictionary.default) + element[1];
        }
        elm.innerText = output;
    });
}

function findValueByKey(searchKey: string, dict: { [key: string]: string }) {
    if (!Object.keys(dict).includes(searchKey.toLowerCase()))
        return searchKey;

    let result: string = dict[searchKey.toLowerCase()];
    let char = searchKey.charAt(0);

    return (char != char.toUpperCase()) ?
            result.charAt(0).toLowerCase() + result.substring(1) : result;
}

function filterPunctuation(string: string) {
    let punc = "";

    ['.', ',', '?', '!', ';',].forEach(element => {
        if (string.includes(element)) {
            string = string.replaceAll(element, '');
            punc = element;
        }
    });

    return [string, punc];
}

