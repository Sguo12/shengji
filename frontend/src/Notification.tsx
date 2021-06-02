import * as React from "react";
import * as ReactModal from "react-modal";
import { AppStateContext } from "./AppStateProvider";

const contentStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

const HalfTimeBreak = (): JSX.Element => {
    const { state, updateState } = React.useContext(AppStateContext);
    return (
        <>
            <ReactModal
                isOpen={state.halfTimeBreakNow}
                onRequestClose={() => {
                    updateState({ halfTimeBreakNow: false });
                }}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
                style={{ content: contentStyle }}
            >
                <h2>亲们，该那个什么了吧？</h2>
                <div style={{ width: "100%", height: "100%" }}>
                    <img src="https://i.pinimg.com/originals/ed/77/6e/ed776e900ec6390e82b360fd5ff7c0ee.jpg" width="auto" height="75%"
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} />
                </div>
            </ReactModal>
        </>
    );
};

const Notification = (): JSX.Element => (
    <p style={{ padding: "0 20px" }}>
        <span style={{ float: "right" }}>
            <HalfTimeBreak />
        </span>
    </p>
);

export default Notification;
