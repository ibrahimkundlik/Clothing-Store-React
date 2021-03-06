import styled from "styled-components";

export const RegisterContainer = styled.section`
	p {
		margin: 1rem 0;
	}
	form {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.register-error {
		color: red;
		font-weight: 400;
	}
`;
