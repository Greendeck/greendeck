import React, { Component, PropTypes } from "react";

export default class LogoIcon extends Component {
    static defaultProps = {
        height: 32,
        width: 32
    };

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    };

    render() {
        let { height, width } = this.props;
        return (
            <svg className={this.props.className} viewBox="0 0 66 85" width={width} height={height} fill="currentcolor">
             <g>
              <rect stroke="#ffffff" fill-opacity="0.6" id="svg_7" height="509.000005" width="506.000023" y="0" x="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#ffffff"/>
              <polygon id="svg_1" fill="#23DC8E" points="317.231,191.842 331.337,220.885 185.35,246.256 167.244,377.653 201.745,397.069   376.224,313.3 397.966,262.71 417.714,251.591 421.774,207.305 "/>
              <polygon id="svg_2" fill="#1D8EBF" points="421.774,207.305 446.255,279.684 398.073,262.758 397.966,262.71 "/>
              <polygon id="svg_3" fill="#FFDB01" points="317.231,191.842 376.224,313.3 185.35,246.256 65.745,0 256.62,67.044 "/>
              <polygon id="svg_4" fill="#1D8EBF" points="201.745,397.069 206.974,445.169 92.008,512 185.35,246.256 "/>
             </g>
            </svg>
        );
    }
}
