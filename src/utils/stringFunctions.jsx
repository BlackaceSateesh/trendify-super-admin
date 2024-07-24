export const toPascalCase = str => {
  return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

export function processLabel(label) {
  const parts = label.split(/({.*?})/);

  return parts.map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      return <span key={index} style={{ color: 'var(--secondary-yellow)' }}>{part.slice(1, -1)}</span>;
    } else {
      return part;
    }
  });
}
