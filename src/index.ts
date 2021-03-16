// import

import '@testing-library/jest-dom';
import {waitFor} from '@testing-library/dom';
import MatchMediaMock from 'jest-matchmedia-mock';

// export

export const waitForTimeout = (ms: number) =>
  waitFor(() => new Promise((resolve) => setTimeout(resolve, ms)));

export * as dateMock from 'jest-date-mock';
export * as proxyMock from 'jest-mock-proxy';
export * as fetchMock from 'jest-fetch-mock';
export const matchMediaMock = new MatchMediaMock();

// eslint-disable-next-line @typescript-eslint/no-duplicate-imports
export * from '@testing-library/dom';
export * from '@testing-library/user-event';
export * from '@testing-library/react';
export {renderHook, act, cleanup, addCleanup, removeCleanup, suppressErrorOutput} from '@testing-library/react-hooks';
