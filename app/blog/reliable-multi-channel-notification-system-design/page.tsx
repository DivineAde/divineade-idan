import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function NotificationSystemArticle() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-20">
      <article className="container mx-auto max-w-3xl px-4">
        <Link
          href="/#blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="rounded-full bg-rose-100 px-3 py-1 font-semibold text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
            Engineering
          </span>
          <span>May 2026</span>
          <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            4 min read
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-6xl">
          Reliable Multi-Channel Notification System Design (1M+ Users)
        </h1>

        <p className="mb-10 text-xl leading-8 text-gray-600 dark:text-gray-300">
          Designing a notification system that reliably delivers email, SMS,
          and push messages at scale means thinking carefully about queues,
          retries, provider failures, preferences, and observability.
        </p>

        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5">
          <Image
            src="/image (2).png"
            alt="Notification system design"
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-8 text-base leading-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-950 dark:text-white">
              The Core Idea
            </h2>
            <p>
              A reliable notification system should separate the moment an
              event happens from the moment a message is delivered. Instead of
              sending directly from the product flow, the application publishes
              an event to a queue. Workers then process that event, choose the
              right channel, and deliver it through the configured provider.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-950 dark:text-white">
              What Makes It Reliable
            </h2>
            <p>
              Reliability comes from durable queues, idempotent jobs, retries
              with backoff, provider fallbacks, and a dead-letter queue for
              messages that need manual review. User preferences and quiet
              hours should be checked before delivery so the system respects
              the person receiving the message.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-950 dark:text-white">
              Scaling Past 1M Users
            </h2>
            <p>
              At higher volume, workers can be scaled horizontally by channel
              and priority. Critical alerts should move through a high-priority
              queue, while marketing or digest notifications can be throttled.
              Metrics for delivery rate, failures, latency, and provider health
              make it easier to spot problems before users feel them.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
