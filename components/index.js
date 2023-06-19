import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACTION_ONE, ACTION_TWO } from '../actions/actionTypes';

class ScrollToTop extends Component {
  componentDidMount () {
    const store = this.props.store;
    /**
     * @function 匿名函数: 通过store.subscribe监听最新的action，如果类型符合，就执行返回顶部
     *
     * */
    store.subscribe(() => {
      const actionType = store.getState().lastAction.type;
      switch (actionType) {
        case ACTION_ONE:
        case ACTION_TWO:
          window.scrollTo(0, 0);
          break;
        default: break;
      }
    });
  }

  componentDidUpdate (prevProps) {
    /**
     * 当route路径发生变化的时候，执行返回顶部
     * */
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    return null;
  }
}

export default withRouter(ScrollToTop);
