import MarkdownRenderer from "@/components/markdown-renderer";
import { Box } from "@chakra-ui/react";

export default function Markdown() {
  const content =
    "# 欢迎使用 Markdown！\n\n" +
    "这是一个在 Chakra ui 中使用 Markdown 的简单示例。\n\n" +
    "# 一级标题\n" +
    "## 二级标题\n" +
    "### 三级标题\n" +
    "#### 四级标题\n" +
    "##### 五级标题\n" +
    "###### 六级标题\n\n" +
    "**加粗**\n\n" +
    "*斜体*\n\n" +
    "~~删除线~~\n\n" +
    "- 无序列表项 1\n" +
    "- 无序列表项 2\n" +
    "- 无序列表项 3\n\n" +
    "1. 有序列表项 1\n" +
    "2. 有序列表项 2\n" +
    "3. 有序列表项 3" +
    "\n\n" +
    "> 引用\n\n" +
    "```js\n" +
    "// 代码块\n" +
    "console.log('Hello, World!');\n" +
    "```\n\n" +
    "![图片](/img.png)\n\n" +
    "[链接](https://www.bilibili.com/)\n\n" +
    "| 标题 | 标题 | 标题 |\n" +
    "| --- | --- | --- |\n" +
    "| 内容 | 内容 | 内容 |\n" +
    "| 内容 | 内容 | 内容 |\n" +
    "| 内容 | 内容 | 内容 |\n\n" +
    "公式：$E=mc^2$";
  return (
    <Box p={4}>
      <MarkdownRenderer content={content} />
    </Box>
  );
}
