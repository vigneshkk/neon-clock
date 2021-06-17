import { html, css, LitElement } from 'lit-element';

export class NeonClock extends LitElement {
  static get styles() {
    return css`
    .circle{
      height: 300px;
      width: 300px;
      background-color: blue;
      border-radius:50%;
    }
    #midcircle{
      position: absolute;
      left: 148px;
      top: 150px;
      height:10px;
      width: 10px;
      border-radius: 50%;
      background-color: black;
    }
    #hours{
      position : absolute;
      left : 150px;
      top: 75px;
      height: 75px;
      width: 7px;
      border-radius: 20px;
      background-color : white;
    }
    #minutes{
      position : absolute;
      left : 150px;
      top: 50px;
      height: 100px;
      width: 5px;
      border-radius: 20px;
      background-color : yellow;
    }
    #seconds{
      position : absolute;
      left : 150px;
      top: 20px;
      height: 130px;
      width: 2px;
      border-radius: 20px;
      background-color : pink;
    }
    `;
  }

  changeInTime(changeTime,changeHand){
    changeHand.style.transformOrigin="bottom";
    changeHand.style.transform=`rotate(${changeTime}deg)`;
  }

  constructor() {
    super();
    this.hours=0;
    this.hourTag=document.createElement('div');
    this.hourTag.setAttribute("id","hours");
    this.minutes=0;
    this.minuteTag=document.createElement('div');
    this.minuteTag.setAttribute("id","minutes");
    this.seconds=0;
    this.secondTag=document.createElement('div');
    this.secondTag.setAttribute("id","seconds");
    setInterval(()=>{
      this.hours=(this.hours+1)%360;
      this.changeInTime(this.hours,this.hourTag);
    },10)
    setInterval(()=>{
      this.minutes=(this.minutes+1)%360;
      this.changeInTime(this.minutes,this.minuteTag);
    },100)
    setInterval(()=>{
      this.seconds=(this.seconds+1)%360;
      this.changeInTime(this.seconds,this.secondTag);
    },1000)
  }
  
  render() {
    return html`
      <div class="circle">   
      ${this.hourTag}
      ${this.minuteTag}
      ${this.secondTag}
      <div id="midcircle"></div>
      </div>
    `;
  }
}