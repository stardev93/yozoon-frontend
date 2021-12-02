import PropTypes from 'prop-types';
import Header from './Header/Header';
import HeaderLinks from "./Header/HeaderLinks.js";
import Footer from "./Footer/Footer.js";
export default function HomeContainer({ children }) {
  return (
    <div>
      <Header
        brand={<img src="/img/logo-top.png" style={{height: 130, width: 100}} />}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      {children}
      <Footer />
    </div>
  );
}

HomeContainer.propTypes = {
  children: PropTypes.any,
};
