import { Blockquote, Code, Em, Heading, Image, Link, List, Table, Text } from "@chakra-ui/react";
import "katex/dist/katex.min.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type MarkdownRendererProps = {
  content: string; // 需要渲染的 Markdown 内容
};

const chakraComponents = {
  h1: ({ ...props }) => <Heading as="h1" size="2xl" my={4} {...props} />,
  h2: ({ ...props }) => <Heading as="h2" size="xl" my={4} {...props} />,
  h3: ({ ...props }) => <Heading as="h3" size="lg" my={3} {...props} />,
  h4: ({ ...props }) => <Heading as="h4" size="md" my={2} {...props} />,
  h5: ({ ...props }) => <Heading as="h5" size="sm" my={2} {...props} />,
  h6: ({ ...props }) => <Heading as="h6" size="xs" my={2} {...props} />,
  p: ({ ...props }) => <Text my={2} {...props} />,
  a: ({ ...props }) => <Link variant="underline" {...props} />,
  code: ({ ...props }) => (
    <Code colorScheme="yellow" fontSize="sm" px={2} py={1} my={2} borderRadius="md" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <Blockquote.Root my={2}>
      <Blockquote.Content {...props} />
    </Blockquote.Root>
  ),
  strong: ({ ...props }) => <Text as="strong" fontWeight="bold" {...props}></Text>,
  em: ({ ...props }) => <Em {...props}></Em>,
  ul: ({ ...props }) => <List.Root ps="5" my={2} {...props}></List.Root>,
  ol: ({ ...props }) => <List.Root as="ol" ps="5" my={2} {...props}></List.Root>,
  li: ({ ...props }) => <List.Item {...props}></List.Item>,
  img: ({ ...props }) => <Image rounded="md" my={2} {...props} />,
  table: ({ ...props }) => (
    <Table.Root variant="outline" size="sm" my={2} rounded="md" {...props} />
  ),
  thead: ({ ...props }) => <Table.Header {...props} />,
  tbody: ({ ...props }) => <Table.Body {...props} />,
  tfoot: ({ ...props }) => <Table.Footer {...props} />,
  tr: ({ ...props }) => <Table.Row {...props} />,
  th: ({ ...props }) => <Table.ColumnHeader {...props} />,
  td: ({ ...props }) => <Table.Cell {...props} />,
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={chakraComponents}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
