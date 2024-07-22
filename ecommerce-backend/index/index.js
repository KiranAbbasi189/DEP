<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
</head>
<body>
    <h1>All Posts</h1>
    <a href="/posts/new">Create New Post</a>
    <ul>
        <% posts.forEach(post => { %>
            <li>
                <a href="/posts/<%= post._id %>"><%= post.title %></a>
            </li>
        <% }) %>
    </ul>
</body>
</html>
