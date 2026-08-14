import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="journal-prose">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => {
            if (href?.startsWith("/")) {
              return <Link href={href}>{children}</Link>;
            }

            return <a href={href}>{children}</a>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
