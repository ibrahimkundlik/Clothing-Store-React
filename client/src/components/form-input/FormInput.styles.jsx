import styled, { keyframes } from "styled-components";

const labelMove = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-140%);
  }
`;

export const InputContainer = styled.div`
	width: 100%;
	position: relative;
	margin: 1.5rem 0;

	input {
		width: 100%;
		padding: 0.4rem;
		border-bottom: 2px solid black;
		transition: all 0.5s;

		&:focus {
			background-color: #d1f0ff;

			~ label {
				animation: ${labelMove} 0.5s 1 forwards running;
			}
		}

		&:invalid {
			box-shadow: none;
		}
	}

	label {
		color: #5f5f5f;
		position: absolute;
		top: 20%;
		left: 0%;
		animation: ${labelMove} 0.5s 1 forwards paused;

		&:hover {
			cursor: text;
		}
	}
`;
