function slugify(title) {
    let titleArray = title.split(" ");
    let slug = "";

    for (const word of titleArray) {
        slug += word.toLowercase()
    }

}