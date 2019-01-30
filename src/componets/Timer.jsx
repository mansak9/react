import React from 'react';
import './Timer.css';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko')

class Timer extends React.Component{

  constructor(props){
    super(props)
      this.state = {
        mtNow : moment()
      }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mtNow : moment()
      })
    }, 1000)
  }

  render(){
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    return(
      <div className="Timer">
        <div>{`현재시간은 ${mtNow.format('a hh:mm:ss')}`}</div>
        <div>{`${mtExpire.fromNow()}에 종료됩니다.`}</div>
      </div>
    )
  }
}

export default Timer;