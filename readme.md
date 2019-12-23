## 疑问点

**Q**:js 文件中 使用了类型

**A**: flow 静态类型检查

**Q**:shard=>ReactSymbols 为什么使用 `Symbol.for` 来创建共享符号？

**A**类型检查以屏蔽外部写入的 对象，初步避免XSS 注入攻击，但是没有Symbol 支持的情况下采用的是 一个常量。比如`0xeac7` 来作为判断依据，据说是因为长得像 react 这个单词。[相关](<http://tech.colla.me/zh/show/why_react_tags_element_with_$$typeof>)

