import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode,
}

interface State {
	error: Error | null,
	info: ErrorInfo | null,
}
class ErrorBoundary extends Component<Props, State> {
	state = {
			error: null,
			info: null,
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		this.setState({ error, info });
	}

	render(): ReactNode {
		return this.state.error ? (
			<ComponentOnError />
		 ) : this.props.children;
	}
}

const ComponentOnError = () => (
	<div>Ohhh! Something went wrong!</div>
)

export default ErrorBoundary;
