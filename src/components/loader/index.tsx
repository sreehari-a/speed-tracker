import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "../../utils/injectReducer";
import stylize from "../../utils/stylize";
import { selectLoading } from "./selectors";
import styles from "./styles";
import reducer from "./reducer";

type Props = {
  classes: any;
  loaderText?: string;
  loading: boolean;
};
const key = "loader";
function Loader({ classes, loaderText, loading }: Props) {
  useInjectReducer({ key, reducer });
  return (
    <>
      {loading &&loaderText && <div className={classes.loaderText}>{loaderText}</div>}
      <div className={classes.container}>
        {loading && (
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
});

const withConnect = connect(mapStateToProps);
export default stylize(compose(withConnect, memo)(Loader), styles);
// export default stylize(Loader, styles);
