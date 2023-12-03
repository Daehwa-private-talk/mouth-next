'use client';

import { ERROR } from '@/constants/messages';
import React from 'react';
import Fallback from './Fallback';

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    window.alert(ERROR);

    console.error(error);
    console.log(errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children === this.props.children) {
      return;
    }

    this.setState({ hasError: false, error: null });
  }

  render() {
    const { hasError, error } = this.state;
    return hasError ? <Fallback error={error} /> : this.props.children;
  }
}

export default ErrorBoundary;
