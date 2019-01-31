import React from "react";
import "./Timer.css";
import moment from "moment";
import "moment/locale/ko";
import "./Timer.less";

moment.locale("ko");

class Timer extends React.Component {
  constructor(props) {
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
    console.log("componentDidMount1");
    if (!this.checkExpired()) {
      console.log("componentDidMount2");
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment()
        });
      }, 1000);
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate1");
    if (this.checkExpired) {
      console.log("componentDidUpdate2");
      console.log(this.checkExpired(), "끝");
      clearInterval(this.nTimer);
    }
  }

  render() {
    const { expireDate, onExpired } = this.props;
    const { mtNow } = this.state;
    const mtExpire = moment(expireDate);

    const isExpire = mtExpire < mtNow;

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
