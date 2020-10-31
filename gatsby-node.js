/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

async function turnBlogPostsIntoPages({ graphql, actions }) {
    const blogTemplate = path.resolve('./src/templates/BlogPost.js');
    const { data } = await graphql(`
        query {
            blogs: allSanityBlogPost {
                nodes {
                    slug {
                        current
                    }
                }
            }
        }
    `);

    data.blogs.nodes.forEach((blog) => {
        console.log(
            `creating page for the blog post called ${blog.slug.current}`
        );
        actions.createPage({
            // what is the url for this new page
            path: `blog/${blog.slug.current}`,
            component: blogTemplate,
            context: {
                slug: blog.slug.current,
            },
        });
    });
}

exports.createPages = async function createPages(params) {
    // Create pages dynamically
    // wait for all promises to be resolved before finishing this function
    await Promise.all([turnBlogPostsIntoPages(params)]);
};
