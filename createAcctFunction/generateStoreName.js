function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}


export function generateUniqueStoreSlug(storeName) {
    const baseSlug = slugify(storeName);

    let vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    let slug = baseSlug;
    let counter = 1;

    while (vendors.some(v => v.storeSlug === slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}
