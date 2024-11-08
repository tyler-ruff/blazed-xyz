// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Blazed Publishing';
export const SITE_DESCRIPTION = 'Blazed Publishing is the publishing business division of Blazed Labs.';
export const MAIN_MENU = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Blog",
        path: "#",
        children: [
            { title: "Hello 1", path: "/" },
            { title: "Hello 2", path: "/" },
            { title: "Hello 3", path: "/" },
        ]
    },
    {
        title: "Contact",
        path: "https://blazedlabs.com/contact"
    },
];