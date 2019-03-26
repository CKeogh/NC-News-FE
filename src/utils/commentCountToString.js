export const commentCountToString = (commentCount) => {
    const s = commentCount === '1' ? '' : 's'
    return `${commentCount} comment${s}`
}