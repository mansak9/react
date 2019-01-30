import React from "react";
import "./Timer.css";
import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

class Timer extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      mtNow: moment()
    };
  }

  checkExpired = () => {
    const { expireDate } = this.props;
    const { mtNow } = this.state;
    const mtExpire = moment(expireDate);

    const isExpire = mtExpire < mtNow;

    return isExpire;
  };

  componentDidMount() {
    if (!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment()
        });
      }, 1000);
    }
  }

  componentDidUpdate() {
    if (this.checkExpired) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const { expireDate, onExpired } = this.props;
    const { mtNow } = this.state;
    const mtExpire = moment(expireDate);

    const isExpire = mtExpire < mtNow;

    console.log(onExpired("qwe123"));

    // let msg = null;
    //
    // if (!isExpire) {
    //   msg = <div>{mtExpire.fromNow()}에 종료됩니다.</div>;
    // } else {
    //   msg = <div>강의가 종료 되었습니다.</div>;
    // }

    if (isExpire) {
      onExpired("adadaadad");
    }

    return (
      <div className="Timer">
        <div>{`현재시간은 ${mtNow.format("a hh:mm:ss")}`}</div>
        {/*<div>{msg}</div>*/}

        {isExpire ? (
          <div>종료 되었습니다.</div>
        ) : (
          <div>{`${mtExpire.fromNow()}에 종료됩니다.`}</div>
        )}
      </div>
    );
  }
}

export default Timer;
