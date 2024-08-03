import { notFound } from 'next/navigation';
import Link from 'next/link';
import { unstable_noStore as noStore } from "next/cache"

async function getBlogPost(id) {
  noStore()

  const data = await fetch(`${process.env.NEXT_URL}/api/blog?id=${id}`, {
    method: "GET",
  })

  if (!data.ok) {
    return null
  }

  const blog = await data.json()

  if (!blog || blog.length === 0 ) {
    return null;
  }

  return blog[0];
}

export default async function BlogPost({ params }) {
  const blog = await getBlogPost(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="text-gray-400 mb-6">
          <span>{new Date(blog.timeCreated)}</span>
        </div>
        <div className="prose prose-invert max-w-none whitespace-pre-line">
          <p>{blog.content}</p>
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition duration-300">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    </div>
  );
}