
import React, { Component } from "react";
import "./backToTop.less";
 
 
export default class BackToTop extends Component {
  n: number = 0
  start: number = 0
  time: number = 1000
  count: number = 0
  dis: number = 0
  iTget: number = 0
  timer: NodeJS.Timeout | null = null
  a: number = 0
  cur: number = 0
  backTop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.n = 0
    this.count = Math.floor(this.time / 30)
    this.start = document.documentElement.scrollTop
    this.dis = this.iTget - this.start
    this.timer = setInterval(this.FnRunOne.bind(this),30)
  }
  // 匀速进行
  FnRunOne(){
    this.n++
    this.a = this.n / this.count
    this.cur = this.start + this.dis * this.a
    document.documentElement.scrollTop = this.cur
    if (this.n === this.count) {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
    
  }  
  // 先加速再减速
  FnRunTwo(){
    this.n++
    this.a = 1-this.n / this.count
    this.cur = this.start + this.dis * (1-Math.pow(this.a,3))
    document.documentElement.scrollTop = this.cur
    if (this.n === this.count) {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
    
  } 
  // 先减速再加速
  FnRunThree(){
    this.n++
    this.a = this.n / this.count
    this.cur = this.start + this.dis * (Math.pow(this.a,3))
    document.documentElement.scrollTop = this.cur
    if (this.n === this.count) {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
    
  }  
  render() {
    return (
      <div className="scroll-box">
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-item"></div>
        <div className="scroll-button" onClick={this.backTop.bind(this)} >点击返回顶部</div>
      </div>
    );
  }
}

