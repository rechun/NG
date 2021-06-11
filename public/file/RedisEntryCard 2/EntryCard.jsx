import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { injectIntl } from 'react-intl';
import { withRouter } from "react-router-dom";
import './entrycard.scss';

@withRouter
@injectIntl
export default class EntryCard extends Component {
  static displayName = 'EntryCard';

  handleClick = (url, index) => {
    console.log('entry card******', url, index)
    localStorage.setItem('workorderMySQLTab', index)
    this.props.history.push(url);
  }

  render() {
    const { intl, fetchData } = this.props;
    const i18n = (value) => intl.formatMessage({ id: value });
    const list = [
      {
        title: i18n('app.redis.workorder.apply.cluster'),
        img: require('./image/Redis.png'),
        url: '/workOrder/clusterApply',
        index: '0',
      },
      {
        title: i18n('app.redis.workorder.recycle.cluster'),
        img: require('./image/redis_cluster.png'),
        url: '/workOrder/revokeCluster',
        index: '1',
      },
      {
        title: i18n('app.redis.workorder.operate.cluster'),
        img: require('./image/RedisCluster.png'),
        url: '/workOrder/clusterResize',
        index: '2',
      },
      // {
      //   title: i18n('app.redis.workorder.consult'),
      //   img: '//img.alicdn.com/tfs/TB196v1RFXXXXb6aXXXXXXXXXXX-140-140.png',
      //   url: '/workOrder/addConsult',
      //   index: '3',
      // },
    ];
    return (
      <IceContainer
        className="entry-card-redis"
      >
        {list.map((item, index) => {
          return (
            <a onClick={() => {this.handleClick(item.url, item.index)}} key={index} className="card-item-redis" >
              <div className="card-cover-redis"><img src={item.img} alt={item.title} /></div>
              <div className="card-title-redis">{item.title}</div>
            </a>
          );
        })}
      </IceContainer>
    );
  }
}

const styles = {
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};
