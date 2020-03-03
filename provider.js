import React from "react";
import styled from "styled-components";
import ThemeProvider from "mdx-deck/dist/Provider";

const WrapperElement = styled.main`
	*[class~="Slide__Root"] {
		background-color: #011627;
		color: white;
	}

	h2,
	p {
		margin-left: auto;
		margin-right: auto;
		max-width: 50ch;
	}
`;

const Wrapper = ({ children }) => {
	return <WrapperElement>{children}</WrapperElement>;
};

const Provider = ({ index, children, ...rest }) => {
	return (
		<ThemeProvider {...rest}>
			<Wrapper>{children}</Wrapper>
		</ThemeProvider>
	);
};
