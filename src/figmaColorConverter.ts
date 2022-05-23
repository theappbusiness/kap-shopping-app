type FigmaColorType = {
  name: string;
  description: string;
  color: string;
};
export const figmaConverter = (colors: FigmaColorType[]) => {
  const colorTheme = colors.reduce((acc, currValue): any => {
    return { ...acc, [colorNameConverter(currValue.name)]: currValue.color };
  }, {});
  return colorTheme;
};

const colorNameConverter = (colorName: string) =>
  colorName.replace(/[^a-zA-Z0-9]/g, '');
