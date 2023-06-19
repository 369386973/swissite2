import React, { Component } from 'react';
class index extends Component {
    constructor(props:any){
        super(props)
        this.state={
            show:false
        }
        this.onScroll = this.onScroll.bind(this)
    }
    onScroll = () => {
        const {show}:any=this.state
        if (document.documentElement.scrollTop > 100) {
          this.setState({ show: true })
        } else{
          this.setState({ show: false })
        }
      }
    scrollToTop = () => {
        let scrollToptimer = setInterval(function() {
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 16;
            document.documentElement.scrollTop -= speed;
            if (top == 0) {
              clearInterval(scrollToptimer);
            }
          }, 5);
    }
    componentDidMount(){
      window.onscroll = this.onScroll;
    }
    render() {
        const {show}:any=this.state
        return (
            <div>

                {
                    show&&<div onClick={()=>{this.scrollToTop()}} className='fanhui'><img src={require("../../zyb_imgs/back_top_Z.png").default} alt="" /></div>
                }
                
            </div>
        );
    }
}

export default index;
