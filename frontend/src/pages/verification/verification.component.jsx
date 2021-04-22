import React, { useEffect } from "react";
import { connect } from "react-redux";
import { verifyUserAccount } from "../../redux/user/user.actions";
import "./verification.styles.scss";

const VerificationPage = ({
    user: { verified, registered },
    match,
    verifyUserAccount,
}) => {
    useEffect(() => {
        verifyUserAccount();
    }, [verifyUserAccount]);

    return (
        <div className="verification">
            {registered.status ? (
                <h2>{verified.status ? verified.msg : registered.msg}</h2>
            ) : (
                <h2 className="message-success">{registered.msg}</h2>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        verifyUserAccount: () =>
            dispatch(verifyUserAccount(ownProps.match.params.userHash)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(VerificationPage);
