/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// 16.12.0
import ReactVersion from 'shared/ReactVersion';

// 定义的 Symbol type
import {
  REACT_FRAGMENT_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_SUSPENSE_LIST_TYPE,
} from 'shared/ReactSymbols';
// 基本的 Componet 构造函数 和 PureComponent 构造函数
// 此时内容几乎相同 PureComponent 的 isPureReactComponent 为 true
import {Component, PureComponent} from './ReactBaseClasses';
// functon 返回 包含 current 属性的对象
import {createRef} from './ReactCreateRef';
// 几个children 的方法
import {forEach, map, count, toArray, only} from './ReactChildren';

import {
  createElement,
  createFactory,
  cloneElement,
  isValidElement,
  jsx,
} from './ReactElement';

import {createContext} from './ReactContext';
// 懒加载组件
import {lazy} from './ReactLazy';
// return forward 包裹对象
import forwardRef from './forwardRef';
// type & compare
import memo from './memo';

import {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useResponder,
  useTransition,
  useDeferredValue,
} from './ReactHooks';

import {withSuspenseConfig} from './ReactBatchConfig';

import {
  createElementWithValidation,
  createFactoryWithValidation,
  cloneElementWithValidation,
  jsxWithValidation,
  jsxWithValidationStatic,
  jsxWithValidationDynamic,
} from './ReactElementValidator';

import ReactSharedInternals from './ReactSharedInternals';
import createFundamental from 'shared/createFundamentalComponent';
import createResponder from 'shared/createEventResponder';
import createScope from 'shared/createScope';

// 特性 flags
import {
  enableJSXTransformAPI,
  enableFlareAPI,
  enableFundamentalAPI,
  enableScopeAPI,
  exposeConcurrentModeAPIs,
} from 'shared/ReactFeatureFlags';
const React = {
  Children: {
    map,
    forEach,
    count,
    toArray,
    only,
  },

  createRef,
  Component,
  PureComponent,

  createContext,
  forwardRef,
  lazy,
  memo,

  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,

  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: __DEV__ ? createElementWithValidation : createElement,
  cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
  createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals,
};

if (exposeConcurrentModeAPIs) {
  React.useTransition = useTransition;
  React.useDeferredValue = useDeferredValue;
  React.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  React.unstable_withSuspenseConfig = withSuspenseConfig;
}

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamental;
}

if (enableScopeAPI) {
  React.unstable_createScope = createScope;
}

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableJSXTransformAPI) {
  if (__DEV__) {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  } else {
    React.jsx = jsx;
    // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions
    React.jsxs = jsx;
  }
}

export default React;
