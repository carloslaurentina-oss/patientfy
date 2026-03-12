import React from "react";

/**
 * Lightweight renderer for Payload CMS Lexical rich text JSON.
 * Handles the most common node types without pulling in heavy dependencies.
 */

type LexicalNode = {
  type: string;
  tag?: string;
  text?: string;
  format?: number | string;
  children?: LexicalNode[];
  listType?: string;
  url?: string;
  newTab?: boolean;
  value?: { url?: string; alt?: string };
  fields?: { url?: string; newTab?: boolean; linkType?: string };
  direction?: string;
  indent?: number;
  version?: number;
  [key: string]: unknown;
};

type RichTextProps = {
  content: Record<string, unknown> | null | undefined;
  className?: string;
};

// Lexical format flags (bitmask)
const IS_BOLD = 1;
const IS_ITALIC = 2;
const IS_STRIKETHROUGH = 4;
const IS_UNDERLINE = 8;
const IS_CODE = 16;
const IS_SUBSCRIPT = 32;
const IS_SUPERSCRIPT = 64;

function formatText(text: string, format: number): React.ReactNode {
  let result: React.ReactNode = text;

  if (format & IS_BOLD) result = <strong>{result}</strong>;
  if (format & IS_ITALIC) result = <em>{result}</em>;
  if (format & IS_STRIKETHROUGH) result = <s>{result}</s>;
  if (format & IS_UNDERLINE) result = <u>{result}</u>;
  if (format & IS_CODE) result = <code>{result}</code>;
  if (format & IS_SUBSCRIPT) result = <sub>{result}</sub>;
  if (format & IS_SUPERSCRIPT) result = <sup>{result}</sup>;

  return result;
}

function renderNode(node: LexicalNode, index: number): React.ReactNode {
  const key = index;

  // Text node
  if (node.type === "text") {
    const format = typeof node.format === "number" ? node.format : 0;
    return <React.Fragment key={key}>{formatText(node.text || "", format)}</React.Fragment>;
  }

  // Line break
  if (node.type === "linebreak") {
    return <br key={key} />;
  }

  const children = node.children?.map((child, i) => renderNode(child, i));

  // Link
  if (node.type === "link" || node.type === "autolink") {
    const url = node.fields?.url || node.url || "#";
    const newTab = node.fields?.newTab ?? node.newTab;
    return (
      <a
        key={key}
        href={url}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  // Paragraph
  if (node.type === "paragraph") {
    return <p key={key}>{children}</p>;
  }

  // Headings
  if (node.type === "heading") {
    const Tag = (node.tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6") || "h2";
    return <Tag key={key}>{children}</Tag>;
  }

  // Lists
  if (node.type === "list") {
    const Tag = node.listType === "number" ? "ol" : "ul";
    return <Tag key={key}>{children}</Tag>;
  }

  if (node.type === "listitem") {
    return <li key={key}>{children}</li>;
  }

  // Quote
  if (node.type === "quote") {
    return <blockquote key={key}>{children}</blockquote>;
  }

  // Upload / Image block
  if (node.type === "upload") {
    const url = node.value?.url;
    const alt = node.value?.alt || "";
    if (url) {
      return (
        <figure key={key}>
          <img src={url} alt={alt} className="rounded-lg w-full" loading="lazy" />
        </figure>
      );
    }
    return null;
  }

  // Fallback: render children if present
  if (children) {
    return <React.Fragment key={key}>{children}</React.Fragment>;
  }

  return null;
}

export default function RichText({ content, className }: RichTextProps) {
  if (!content) return null;

  const root = content.root as LexicalNode | undefined;
  if (!root?.children) return null;

  return (
    <div className={className}>
      {root.children.map((node, i) => renderNode(node, i))}
    </div>
  );
}
