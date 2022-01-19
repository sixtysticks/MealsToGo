import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
	font-family: ${theme.fonts.body};
	font-weight: ${theme.fontWeights.regular};
	color: ${theme.colors.text.primary};
	flex-wrap: wrap;
	margin: 0px;
`;

const title = (theme) => `
	color: ${theme.colors.text.primary};
	font-family: ${theme.fonts.headingBold};
	font-size: ${theme.fontSizes.body};
`;

const subtitle = (theme) => `
	font-family: ${theme.fonts.body};
	font-size: ${theme.fontSizes.caption};
`;

const body = (theme) => `
	font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
	font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.button};
`;

const caption = (theme) => `
	font-size: ${theme.fontSizes.caption};
	font-family: ${theme.fonts.body};
`;

const error = (theme) => `
	color: ${theme.colors.text.error};
`;

const hint = (theme) => `
	font-size: ${theme.fontSizes.body};
`;

const variants = {
  title,
  subtitle,
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
