import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Sparkles } from "lucide-react";

type BlogPost = {
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
};

const posts: BlogPost[] = [
  {
    title: "Reliable Multi-Channel Notification System Design (1M+ Users)",
    summary:
      "Designing a notification system that can reliably deliver messages to over 1 million users across multiple channels (email, SMS, push) while ensuring scalability, fault tolerance, and low latency.",
    image: "/image (2).png",
    category: "Engineering",
    readTime: "4 min read",
    date: "May 2026",
    href: "https://www.notion.so/Reliable-Multi-Channel-Notification-System-Design-1M-Users-36c978a0491d80348b80e3e37b84df4c",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-medium text-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950 dark:text-white mb-4">
              Latest writing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Short, useful notes on frontend engineering, product thinking, and
              building interfaces people enjoy using.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/20"
          >
            Work with me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] ${
                index === 0 ? "md:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur dark:bg-black/55 dark:text-white">
                  <Sparkles className="h-3.5 w-3.5 text-rose-500" />
                  {post.category}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={post.href}>
                  <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-950 transition group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {post.summary}
                </p>

                <Link
                  href={post.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600 dark:bg-white dark:text-gray-950 dark:hover:bg-rose-200"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
