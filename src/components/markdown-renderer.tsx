import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Heading, Text, Code, Box, Link } from "@chakra-ui/react";
import "katex/dist/katex.min.css";

interface MarkdownRendererProps {
  content: string; // 需要渲染的 Markdown 内容
}

const ChakraMarkdownComponents = {
  h1: (props: any) => <Heading as="h1" size="2xl" my={4} {...props} />,
  h2: (props: any) => <Heading as="h2" size="xl" my={4} {...props} />,
  h3: (props: any) => <Heading as="h3" size="lg" my={3} {...props} />,
  p: (props: any) => <Text my={2} {...props} />,
  code: (props: any) => (
    <Code colorScheme="yellow" fontSize="sm" px={2} py={1} borderRadius="md" {...props} />
  ),
  pre: (props: any) => (
    <Box
      as="pre"
      bg="gray.800"
      color="white"
      p={4}
      my={4}
      borderRadius="md"
      overflowX="auto"
      {...props}
    />
  ),
  a: (props: any) => <Link color="teal.500" {...props} />,
  ul: (props: any) => <Box as="ul" pl={5} style={{ listStyleType: "disc" }} {...props} />,
  ol: (props: any) => <Box as="ol" pl={5} style={{ listStyleType: "decimal" }} {...props} />,
  li: (props: any) => <Box as="li" my={1} {...props} />,
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      children={content}
      components={ChakraMarkdownComponents}
    />
  );
};

export default MarkdownRenderer;
