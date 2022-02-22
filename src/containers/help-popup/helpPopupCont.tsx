import {Component} from "react";
import ReactDOM from "react-dom";
import {IHelpPopupContProps, IHelpPopupContState} from "./types";

class HelpPopupCont extends Component<IHelpPopupContProps, IHelpPopupContState> {

    el: HTMLDivElement;

    constructor(props: IHelpPopupContProps) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }

}

export default HelpPopupCont;