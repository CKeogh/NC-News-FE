export const formatSlug = (title) => {
    if (/\s/.test(title[0])) title = title.slice(1);
    if (/\s/.test(title[title.length - 1])) title = title.slice(0, -1);
    return title.split(' ').join('-');
}
