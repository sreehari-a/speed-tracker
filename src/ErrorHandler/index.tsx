import { message } from 'antd';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import stylize from '../utils/stylize';
import { resetError } from './actions';
import { selectError } from './selectors';
import styles from './styles';
import reducer from './reducer';
import { useInjectReducer } from '../utils/injectReducer';

type Props = {
    error: string,
    resetError: () => void,
}

const key='error';
export function Error(props: Props) {
    const [messageApi, contextHolder] = message.useMessage();
    useInjectReducer({ key, reducer });
    const {error, resetError} = props;
    useEffect(() => {
        if(error) {
            messageApi.open({
                type: 'error',
                content: error,
                duration: 0,
                onClick: resetError
              });
        }
    }, [error]);

    return (
        <>
            {contextHolder}
        </>
    )
}
const mapStateToProps = createStructuredSelector({
  error: selectError(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    resetError: () => dispatch(resetError()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default stylize(compose(withConnect, memo)(Error), styles);
 