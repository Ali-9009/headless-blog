export function getPostCategories(post) {
    const termGroups =
        post._embedded?.["wp:term"] || [];

    return termGroups
        .flat()
        .filter(
            (term) => term.taxonomy === "category"
        );
}

export function getPostTags(post) {
    const termGroups =
        post._embedded?.["wp:term"] || [];

    return termGroups
        .flat()
        .filter(
            (term) => term.taxonomy === "post_tag"
        );
}