export default function getSrc(
  types: string[],
  sourceElements: HTMLSourceElement[],
  srcAttribute: string | null = null,
): string | null {

  for (let extension of types) {
    const matchingNode = sourceElements.find(({src}) => {
      const extensionRegex = new RegExp(`.${extension}$`, 'i');
      return extensionRegex.test(src);
    });

    if (matchingNode) {
      return matchingNode.src;
    }
  }

  if (srcAttribute) {
    return srcAttribute;
  }

  return null;
}
