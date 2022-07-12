import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { ReactReduxContext } from "react-redux";

import getInjectors from "./sagaInjectors";

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */
const InjectSaga =
  ({ key, saga, mode }: { key: any; saga: any; mode?: any }) =>
  (WrappedComponent: any) => {
    class InjectSaga extends React.Component {
      injectors: any;
      static WrappedComponent = WrappedComponent;

      static contextType = ReactReduxContext;

      static displayName = `withSaga(${
        WrappedComponent.displayName || WrappedComponent.name || "Component"
      })`;

      constructor(props: any, context: any) {
        super(props, context);

        this.injectors = getInjectors(context.store);

        this.injectors.injectSaga(key, { saga, mode }, this.props);
      }

      componentWillUnmount() {
        this.injectors.ejectSaga(key);
      }

      render() {
        //@ts-ignore
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(InjectSaga, WrappedComponent);
  };
export default InjectSaga;
const useInjectSaga = ({
  key,
  saga,
  mode,
}: {
  key: any;
  saga: any;
  mode?: any;
}) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    const injectors = getInjectors(context.store);
    injectors.injectSaga(key, { saga, mode });

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };
