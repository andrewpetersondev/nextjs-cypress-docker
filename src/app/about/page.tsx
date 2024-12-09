import Post from "@/interfaces/Post";
import Link from "next/link";

async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://api.vercel.app/blog');
        return response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return []; // Return an empty array if there's an error
    }
}

export default async function Page() {
    const posts = await fetchPosts();
    console.log(posts);
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <p>Go to the home page</p>
            <Link href="/" data-test="go-home-link">Go Home</Link>
            <section>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}