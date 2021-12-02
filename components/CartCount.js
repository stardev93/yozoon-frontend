import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

const Dot = styled.div`
  background: var(--red);
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;
const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.6s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
    background: green;
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(4) rotateX(0.5turn);
  }
`;
export default function CartCount({ count }) {
  const { openCart } = useCart();
  function handleTransitionend() {
    openCart();
  }
  return (
    <AnimationStyles onTransitionEnd={handleTransitionend}>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className='count'
          classNames='count'
          key={count}
          timeout={{ enter: 600, exit: 600 }}>
          <Dot>{count}</Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
}
