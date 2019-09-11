import React from 'react';
class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="leftSide">
                    <div className="textZone">
                        <h3>Ilha Formosa</h3>
                        <div className="title">Taiwan Too Much Information</div>
                        <h4>Taiwan NO.1</h4>
                    </div>
                    <div className="iconZone">
                        <div className="indexIcon hvr-float-shadow" id="test">
                            <img src="/../img/edit.svg" className="icon" />
                            <div className="text">測驗模式</div>
                        </div>
                        <div className="indexIcon hvr-float-shadow" id="preTest">
                            <img src="/../img/clock.svg" className="icon" />
                            <div className="text">模擬搶票</div>
                        </div>
                    </div>
                </div>
                <div className="twpic">
                    <img src="/../img/TWindex.jpg" className="pic" />
                </div>
                <div className="user member hvr-float-shadow">
                    <img src="/../img/user.svg" className="userIcon" />
                </div>
            </div>
        )
    }
}

export default Container;