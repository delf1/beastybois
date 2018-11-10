import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HorizontalGridLines, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import {UNITS} from "../../res/constants";

class VerticalBar extends Component {
    static defaultProps = {
        data : [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ],
        unit: UNITS.KILOGRAMS
    };

    render(){
        let xDomain = [this.props.data[0].x, this.props.data[this.props.data.length - 1].x];
        let yDomain = [Math.min(...this.props.data.map(o => o.y)), Math.max(...this.props.data.map(o => o.y)) * 1.2];
        return (
            <XYPlot height={300} width={300} {...{xDomain, yDomain}}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title=""/>
                <YAxis title={this.props.unit.STRING_SHORT}/>
                <VerticalBarSeries data={this.props.data} />
            </XYPlot>
        )
    }
}

VerticalBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
    ).isRequired,
    unit: PropTypes.shape({
        STRING_SHORT: PropTypes.string
    })
};

export default VerticalBar;