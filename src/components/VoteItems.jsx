import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteItems extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    voted: PropTypes.bool.isRequired,
    upvote: PropTypes.func.isRequired,
    downvote: PropTypes.func.isRequired,
    resultView: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    clientId: null,
  };

  render = () => {
    const { clientId, data: { title, items, multiple, downvote, showTotal }, styles, text, voted, resultView } = this.props;
    const canVote = (multiple || !voted);
    const total = items.reduce((prev, current) => prev + current.count, 0);
    const wholeTotal = items.reduce((prev, current) => {
      if (!current.total) { // TODO: remove at v4
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    const realTotal = total === wholeTotal ? '' : `(${wholeTotal})`;
    return (
      <div>
        {items.map((item, i) => {
          const isAlreadyVoted = (clientId && item.voters && item.voters.indexOf(clientId) > -1);
          const percentage = total === 0 ? 0 : ((item.count / total) * 100).toFixed(2);
          const key = `react-vote-item-${i}`;
          const votedOrNot = (item.voted || isAlreadyVoted)
            ? <span className={styles.votedText}>{text.votedText}</span>
            : canVote
            && (<span className={styles.voteButtons}>
              <button
                onClick={() => this.props.upvote(i)}
                className={styles.voteButton}
              >
                {text.voteButtonText}
              </button>
              {downvote && <button
                onClick={() => this.props.downvote(i)}
                className={styles.downvoteButton}
              >
                {text.downvoteButtonText}
              </button>}
            </span>);
          return (
            <div key={key} className={styles.itemWrapper}>
              <div className={styles.itemTitle} title={item.title}>
                {item.title}
              </div>
              {title && resultView
                ? <div className={styles.itemCount}>{`${item.count}(${percentage}%)`}</div>
                : votedOrNot}
            </div>
          );
        })}
        {resultView && showTotal && <div className={styles.itemWrapper}>
          <div className={styles.itemTitle}>{text.totalText}</div>
          <div className={styles.itemCount}>{total}{realTotal}</div>
        </div>}
      </div>
    );
  };
}

export default VoteItems;